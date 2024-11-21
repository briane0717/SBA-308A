async function initialLoad() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  const questions = await response.json();
  console.log(questions);
}
initialLoad();
