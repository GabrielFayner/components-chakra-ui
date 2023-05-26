export const data = [
  {
    id: "inProgress",
    label: "12 Em progresso",
    value: 12,
    color: "#B794F4",
  },
  {
    id: "notStarted",
    label: "12 Não iniciadas",
    value: 12,
    color: "#63B3ED",
  },
  {
    id: "completed",
    label: "25 Concluídas",
    value: 25,
    color: "#68D391",
  },
];

export const margin = { top: 20, right: 250, bottom: 30, left: 30 };

export const styles = {
  root: {
    fontFamily: "consolas, sans-serif",
    textAlign: "center",
    position: "relative",
    width: 600,
    height: 600,
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: margin.right,
    bottom: 0,
    left: margin.left,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 96,
    color: "#FFFFFF",
    // background: "#FFFFFF33",
    textAlign: "center",
    // This is important to preserve the chart interactivity
    pointerEvents: "none",
  },
  totalLabel: {
    fontSize: 24,
  },
};
