const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;

  // Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”
  
  const score = Number(numberInput1)

  if (score<0 || score>100) {
    message1="This is not possible . An error has occured."
  }
  else if (score >=0 && score<=19) {
   message1="That was a terrible score!"
  }
  else if (score>=20 && score<40) {
    message1="You know some things. Needs improvement."
  }
  else if (score>=40 && score<70) {
    message1="You did a passable job, not bad!"
  }
  else if (score>=70&&score<90) {
    message1="That’s a great score. You really know your stuff."
  }
  else if (score>=90&&score<=100) {
    message1="What an amazing score!"
  }

  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;

  // Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  // Here are the values and their respective comments
  // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  // Score of 0 to 19 — “That was a terrible score!”
  // Score of 20 to 39 — “You know some things. Needs improvement.”
  // Score of 40 to 69 — “You did a passable job, not bad!”
  // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  // Score of 90 to 100 — “What an amazing score!”

  const scores= Number(numberInput2)
  switch (true) {
    case scores<0 || scores>100:
    message2="This is not possible. An error has occurred.";
    break;
    case scores>=0 && scores<20:
    message2="That was a terrible score!";
    break;
    case scores>=20 && scores<40 :
    message2="You know some things. Needs improvement.";
    break;
    case scores>=40 && scores<70 :
    message2="You did a passable job, not bad!";
    break;
    case scores>=70 && scores<90:
    message2="That’s a great score. You really know your stuff.";
    break;
    case scores>=90 && scores<=100:
    message2="What an amazing score!";
    break;
  }

  commentContainer2.innerHTML = message2;
};
