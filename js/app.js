let tickets_sold = 200;
let venue_capacity = 300;
let performer = "blue";
let is_sold_out = false;
let is_repeat_show = true;
let special_performer_1 = "Mj"
let special_performer_2 = " Akon"
let special_performer_3 = " WestLife"
let special_performer_4 = " Lil wayne"
let special_performer_5 = " jay-z "

if (is_sold_out === true) {
  console.log("All Sold Out");
} else {
  console.log("Tickets Still Available");
}

if (tickets_sold / venue_capacity >= 0.9) {
  console.log("Almost Sold Out");
} else if (tickets_sold / venue_capacity >= 0.5) {
  console.log("Tickets Selling Fast");
} else {
  console.log("Tickets On Sale Now");
}

if (tickets_sold / venue_capacity >= 1 && !is_sold_out) {
  console.log('System error, we are unable to sell tickets');
} else if (performer === "Alex") {
  console.log("This artist is not recognized");
} else {
  console.log("All is good now");
}

if (tickets_sold >= 0.9 * venue_capacity) {
  console.log("we have exceeded our capacity");
} else if (is_sold_out && is_repeat_show) {
  console.log("tickets are sold out");
} else {
  console.log("we have some tickets left to sell");
}

if (performer === "alex" || performer === "Shrek" || performer === "Miami Dolfphins") {
  console.log("Luck you");
} else {
  console.log("Good Luck Next time");
}
