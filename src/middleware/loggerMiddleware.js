export default function useLogger() {
  const log = (message, payload) => {
    console.log("[LOG]", message, payload);
  };

  return log;
}
