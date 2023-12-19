import "./app.css";

export function App() {
  return (
    <div className="flex min-h-[100vh] w-screen max-w-full flex-col  bg-[#fff] xl:min-h-[100vh]">
      <div className="flex min-h-[100%] grow ">
        <div className="flex w-full grow flex-col">
          <div
            className={
              "w-[450px] h-[600px] flex flex-col border border-300 fixed bottom-0 right-20"
            }
          >
            <h1 className={"font-bold w-full text-center"}>CHAT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
