export function Layout(props) {
  return (
    <div className="h-screen w-full bg-slate-600">
      <h1 className="font-bold text-5xl text-blue-400"></h1>
      {props.children}
    </div>
  );
}