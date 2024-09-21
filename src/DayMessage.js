function DayMessage() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let message;
  if (day.toLowerCase() === "monday") {
    message = `Happy ${day} `;
  } else if (day.toLowerCase() === "tuesday") {
    message = `Happy ${day} `;
  } else if (day.toLowerCase() === "wednesday") {
    message = `Happy ${day} `;
  } else if (day.toLowerCase() === "thursday") {
    message = `Happy ${day} `;
  } else if (day.toLowerCase() === "friday") {
    message = `Happy ${day} `;
  } else {
    message = "stay calm and enjoy the weekend";
  }

  return (
    <div>
      <h1>{message};</h1>
      {morning ? <h2> Have you had your breakfast yet? </h2> : ""}
    </div>
  );
}

export default DayMessage;
