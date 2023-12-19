import "./app.css";
export function App() {
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    width: "100vw",
    maxWidth: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
  };

  const innerContainerStyle = {
    display: "flex",
    minHeight: "100%",
    flexGrow: 1,
  };

  const contentContainerStyle = {
    display: "flex",
    width: "100%",
    flexGrow: 1,
    flexDirection: "column",
  };
  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        {/* <Sidebar isOpen={sidebarIsOpen} /> */}
        <div style={contentContainerStyle}>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              right: 20,
              width: "450px",
              height: "600px",
              border: "gray 1px solid",
            }}
          >
            <h1 className={"font-bold w-full text-center"}>CHAT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
