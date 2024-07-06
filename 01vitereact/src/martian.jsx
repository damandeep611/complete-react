function Martian() {
  return (
    <div>
      <h2>This is a component designed</h2>
      <p>
        If you want to return a jsx component and also some html tag within the
        same component, Then you have to use a react feature called
        <strong>Fragment</strong> and you can insert a react component and also
        whatever html tags you want to show, but without it you could only
        return the jsx component in the return of function and you coudn't use
        different html tags with a react component without wrapping them all up
        in <strong>DIV</strong> Tag
      </p>
      <span>
        The functions that we import into the main jsx file are called the
        components in react and we will be creating a lot of these components in
        the react web apps{" "}
      </span>
      <span>
        The one convention while making these components is keep in mind that,{" "}
        <br />
        You should Capitalize the functino name i.e if you are making a
        component name mars then <br /> you should name it as Mars.jsx and not
        mars.jsx
      </span>
    </div>
  );
}
export default Martian;
