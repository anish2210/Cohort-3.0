setInterval(() => {
  const d = new Date();
  console.clear();

  const hrs = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  let ampm = hrs >= 12 ? "PM" : "AM";
  
  console.log(`${hrs % 12}:${minutes}:${seconds} ${ampm}`);
}, 1000);
