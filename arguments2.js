function addEntry(squirrel) {
  var entry = {events: [], squirrel: squirrel};
  for (var i = 1; i < arguments.length; i++)
    entry.events.push(arguments[i]);
  console.log(entry);
}
addEntry(true, "work", "touched tree", "pizza",
         "running", "television");