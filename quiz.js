function submitAnswer() {
  var total = 5;
  var score = 0;
  //get user input
  var food = document.forms["quizform"]["food"].value;
  var country = document.forms["quizform"]["country"].value;
  var chemistry = document.forms["quizform"]["chemistry"].value;
  var js = document.forms["quizform"]["js"].value;
  var flag = document.forms["quizform"]["flag"].value;

  //validation

  if (food == null || food == "") {
    document.getElementById("error").innerHTML = "You Missed question 1";
    return false;
  }
  if (country == null || country == "") {
    document.getElementById("error").innerHTML = "You Missed question 2";
    return false;
  }
  if (chemistry == null || chemistry == "") {
    document.getElementById("error").innerHTML = "You Missed question 3";
    return false;
  }
  if (js == null || js == "") {
    document.getElementById("error").innerHTML = "You Missed question 4";
    return false;
  }
  if (flag == null || flag == "") {
    document.getElementById("error").innerHTML = "You Missed question 5";
    return false;
  }

  //set correct answers

  var answers = ["c", "a", "d", "b", "c"];

  //check answers

  if (food == answers[0]) {
    score++;
  }
  if (country == answers[1]) {
    score++;
  }
  if (chemistry == answers[2]) {
    score++;
  }
  if (js == answers[3]) {
    score++;
  }
  if (flag == answers[4]) {
    score++;
  }
  document.getElementById("result").innerHTML =
    "You scored " + score + " out of " + total;
  return false;
}
