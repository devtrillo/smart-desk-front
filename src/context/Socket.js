import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { evolve, prop, compose, pick, propOr } from "ramda";
import { defaults } from "utils/defaults";
import { interval } from "rxjs";
import { switchMap } from "rxjs/operators";

const socketConnection = "http://192.168.15.8:5000";
export const socket = io(socketConnection);

export const SocketsContext = createContext();

const testConnection = interval(1000).pipe(
  switchMap(async () => {
    console.log("Checking connection");
    return socket.connected;
  })
);
const transformations = {
  red: parseInt,
  green: parseInt,
  blue: parseInt,
};

const methods = {
  rainbow: "rainbow",
  rainbow_cycle: "rainbow_cycle",
  theather_chase: "theather_chase",
  rainbow_theather_chase: "rainbow_theather_chase",
  color_fill: "color_fill",
};

const parseColors = compose(
  evolve(transformations),
  pick(["red", "green", "blue"])
);

const parseMethod = prop("method");

export const SocketProvider = ({ children }) => {
  const [connection, setConnection] = useState(false);
  const [method, setMethod] = useState("rainbow");
  const [lightColor, setLightColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  useEffect(() => {
    if (connection)
      fetch(socketConnection)
        .then((res) => res.json())
        .then((data) => {
          setMethod(propOr("method", "method", data));
          setLightColor(parseColors(data));
        });
  }, [connection]);
  useEffect(() => {
    testConnection.subscribe(setConnection);

    socket.on("light", ({ data }) => {
      setLightColor(parseColors(data));
      setMethod(parseMethod(data));
    });
  }, []);

  const getMode = (mode) => propOr(prop("rainbow", methods), mode, methods);

  function updateLightData(data) {
    const lightDefaults = {
      red: 0,
      green: 0,
      blue: 0,
      method,
    };
    return socket.emit("light", {
      data: defaults(data, lightDefaults),
    });
  }
  function setMode(mode) {
    const method = getMode(mode);
    setMethod(method);
    updateLightData({ method, ...lightColor });
  }
  function setColor(color) {
    const colors = parseColors(color);
    setLightColor(colors);
    updateLightData({ ...colors, method });
  }
  return (
    <SocketsContext.Provider
      value={{ lightColor, method, connection, setMode, setColor }}
    >
      {children}
    </SocketsContext.Provider>
  );
};
