/* ALTERNATIVE COLUMN HEADS (AFTER DROPPING) */

var altHead1 = "<p id='plus2'>+</p><p class='headtext'>Accounts receivable</p>";
var altHead2 = "<p id='plus2'>+</p><p class='headtext'>Inventory</p>";
var altHead3 = "<p id='minus'>	&ndash;</p><p class='headtext'>Accounts payable</p>";
var altHead4 = "<p id='minus'>	&ndash;</p><p class='headtext'>Advances received</p>";


/* DRAGGABLE FUNCTIONS */

// OPT1 DRAGGABLE INTO HEAD1

$(function () {
    document.getElementById("opt1").style.zIndex = "1";

    $("#opt1").draggable({
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                console.log("Reverting...");
                $('#opt1').css('background-color', '#ff0000')
                $('#opt1').animate({
                    backgroundColor: '#85c644'
                });
                return true;
            }
        },
        revertDuration: 0
    });

    $("#head1").droppable({
        /*
        deactivate: function (event, ui) {
          $('#opt1').css('background-color', '#ff0000')
          $('#opt1').animate({
            backgroundColor: '#85c644'
          });
        }, */
        accept: "#opt1",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },

        drop: function (event, ui) {
            $("#opt1").draggable({
                disabled: true
            });
            document.getElementById("opt1").style.zIndex = "-2";

            $('#head1').animate({
                backgroundColor: '#51ba49'
            });
            $('#head1').css('margin-top', '5px');
            document.getElementById("head1").innerHTML = altHead1;

            console.log("Dropped!");
            modalquestion(1);
        }
    });
});


// OPT2 DRAGGABLE INTO HEAD3

$(function () {
    document.getElementById("opt2").style.zIndex = "1";
    $("#opt2").draggable({
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                console.log("Reverting...");
                $('#opt2').css('background-color', '#ff0000')
                $('#opt2').animate({
                    backgroundColor: '#85c644'
                });
                return true;
            }
        },
        revertDuration: 0
    });

    $("#head3").droppable({
        accept: "#opt2",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $("#opt2").draggable({
                disabled: true
            });
            document.getElementById("opt2").style.zIndex = "-2";

            $('#head3').animate({
                backgroundColor: '#51ba49'
            });
            $('#head3').css('margin-top', '5px');
            document.getElementById("head3").innerHTML = altHead3;


            console.log("Dropped!");
            modalquestion(3);
        }
    });
});


// OPT3 DRAGGABLE INTO HEAD4

$(function () {
    document.getElementById("opt3").style.zIndex = "1";
    $("#opt3").draggable({
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                console.log("Reverting...");
                $('#opt3').css('background-color', '#ff0000')
                $('#opt3').animate({
                    backgroundColor: '#85c644'
                });
                return true;
            }
        },
        revertDuration: 0
    });

    $("#head4").droppable({
        accept: "#opt3",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $("#opt3").draggable({
                disabled: true
            });
            document.getElementById("opt3").style.zIndex = "-2";

            $('#head4').animate({
                backgroundColor: '#51ba49'
            });
            $('#head4').css('margin-top', '5px');
            document.getElementById("head4").innerHTML = altHead4;

            console.log("Dropped!");
            modalquestion(4);
        }
    });
});


// OPT4 DRAGGABLE INTO HEAD2

$(function () {
    document.getElementById("opt4").style.zIndex = "1";
    $("#opt4").draggable({
        revert: function (is_valid_drop) {
            if (!is_valid_drop) {
                console.log("Reverting...");
                $('#opt4').css('background-color', '#ff0000')
                $('#opt4').animate({
                    backgroundColor: '#85c644'
                });
                return true;
            }
        },
        revertDuration: 0
    });

    $("#head2").droppable({
        accept: "#opt4",
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $("#opt4").draggable({
                disabled: true
            });
            document.getElementById("opt4").style.zIndex = "-2";

            $('#head2').animate({
                backgroundColor: '#51ba49'
            });
            $('#head2').css('margin-top', '5px');
            document.getElementById("head2").innerHTML = altHead2;

            console.log("Dropped!");
            modalquestion(2);
        }
    });
});




/* MODAL QUESTION & ANSWER VARIABLES */

// COLUMN 1 QUESTIONS & ANSWERS

var q11 = "Receivables are a result of timing difference between manufacturing the product or providing the service and receiving the compensation for that."
var c11 = "Correct! This statement is true. This timing difference can be decreased by establishing shorter payment terms for our sales and partly offset by asking for down payment and progress payments from the customers.";
var i11 = "Incorrect. This statement is true. This timing difference can be decreased by establishing shorter payment terms for our sales and partly offset by asking for down payment and progress payments from the customers.";

var q12 = "Improving the turnover of receivables (net sales divided by receivables) is always a good target. The amount of receivables can grow when the business grows but the turnover of receivables (Net sales divided by receivables ) should not be negatively affected.";
var c12 = "Correct! This statement is true. Proactive management of receivables, especially overdue receivables, is a good standard management practice. An increase in receivables can be a sign of relaxed sales terms, poor collection, or a higher risk of customer default. The challenge is to make sure the level of receivables is appropriate given the company's industry and competitive strategy.";
var i12 = "Incorrect. This statement is true. Proactive management of receivables, especially overdue receivables, is a good standard management practice. An increase in receivables can be a sign of relaxed sales terms, poor collection, or a higher risk of customer default. The challenge is to make sure the level of receivables is appropriate given the company's industry and competitive strategy.";

var q13 = "Accounts receivable can also be decreased by sending invoices late or providing aggressive cash discounts for quick payments.";
var c13 = "Correct! This statement is not true. In theory this results in smaller accounts receivable but sending invoices late or offering aggressive cash discounts is the wrong way to do it as it hurts both the cash flow and profitability of the company!";
var i13 = "Incorrect. This statement is not true. In theory this results in smaller accounts receivable but sending invoices late or offering aggressive cash discounts is the the wrong way to do it as it hurts both the cash flow and profitability of the company!";


// COLUMN 2 QUESTIONS & ANSWERS

var q21 = "A key reason for a company to keep inventories is to secure availability when own production or customers have a need.";
var c21 = "Correct! This statement is true. Other reasons for a company to keep inventories are also to take advantage of economies of scale in purchasing, production and transportation. However, in order to avoid overstocking, we have to establish service levels which define how quickly we target to fulfill the needs of our customers and own production.";
var i21 = "Incorrect. This statement is true. Other reasons for a company to keep inventories are also to take advantage of economies of scale in purchasing, production and transportation. However, in order to avoid overstocking, we have to establish service levels which define how quickly we target to fulfill the needs of our customers and own production.";

var q22 = "One of the basic targets in inventory management is just-in-time arrival of raw material and components simultaneously securing the availability.";
var c22 = "Correct! This statement is true. Other basic targets are shortest possible lead times from order to delivery and optimized levels of parts and finished goods inventories, while maintaining the targeted service levels, and minimal number of physical inventory locations while meeting the availability needs of the customers.";
var i22 = "Incorrect. This statement is true. Other basic targets are shortest possible lead times from order to delivery and optimized levels of parts and finished goods inventories, while maintaining the targeted service levels, and minimal number of physical inventory locations while meeting the availability needs of the customers.";

var q23 = "The target should always be minimizing the inventory.";
var c23 = "Correct! This statement is not true. You should naturally minimize <b>excess</b> inventory.However, inventory is needed and the optimal level varies depending on e.g. the agreed service levels, the cost of procurement and the criticality of the components.";
var i23 = "Incorrect. This statement is not true. You should naturally minimize <b>excess</b> inventory. However, inventory is needed and the optimal level varies depending on e.g. the agreed service levels, the cost of procurement and the criticality of the components.";


// COLUMN 3 QUESTIONS & ANSWERS

var q31 = "Payables have a major impact on Net Working Capital.";
var c31 = "Correct! This statement is true. Payables have a major impact on NWC because the ability to negotiate long payment terms for all procured materials, components and services and to maintain high payables (without extra cost) can finance a considerable part of inventory. For example, if we are able to stretch out our payments to suppliers without cost (we pay invoices in 60 days rather than 30 without additional cost),  we can considerably decrease our working capital and thereby our bank debt.";
var i31 = "Incorrect. This statement is true. Payables have a major impact on NWC because the ability to negotiate long payment terms for all procured materials, components and services and to maintain high payables (without extra cost) can finance a considerable part of inventory. For example, if we are able to stretch out our payments to suppliers without cost (we pay invoices in 60 days rather than 30 without additional cost),  we can considerably decrease our working capital and thereby our bank debt.";

var q32 = "The goal in managing payables is to originally negotiate as long payment terms as possible provided that we don’t have to pay higher price for the purchases because of these longer payment terms.";
var c32 = "Correct! This statement is true. The longer the payment times are the bigger part of the inventories is financed by the suppliers. Long payment terms are always a sign of strong purchasing leverage.";
var i32 = "Incorrect. This statement is true. The longer the payment times are the bigger part of the inventories is financed by the suppliers. Long payment terms are always a sign of strong purchasing leverage.";

var q33 = "Extending payment times by delaying the payments beyond due dates is good management practice.";
var c33 = "Correct! This statement is not true. Extending payment times by delaying the payments beyond due dates may lead to paying high interest costs on late payments and deterioration of your supplier relationship.";
var i33 = "Incorrect. This statement is not true. Extending payment times by delaying the payments beyond due dates may lead to paying high interest costs on late payments and deterioration of your supplier relationship.";


// COLUMN 4 QUESTIONS & ANSWERS

var q41 = "Advances are used to cover the financing recuirements of a delivery and potential default risk of the customer.";
var c41 = "Correct! This statement is true. Advances received are a way to help the company (supplier) to finance the capital tied to Work-In-Process (WIP) in project deliveries, which are typically far customized. Furthermore, especially in large projects which have a long lead time, the circumstances of the project or the buyer can change and it is important that we as the supplier secured our position throughout the project.";
var i41 = "Incorrect. This statement is true. Advances received are a way to help the company (supplier) to finance the capital tied to Work-In-Process (WIP) in project deliveries, which are typically far customized. Furthermore, especially in large projects which have a long lead time, the circumstances of the project or the buyer can change and it is important that we as the supplier secured our position throughout the project.";

var q42 = "A company's basic principle is to ask for down payments only with large projects.";
var c42 = "Correct! This statement is not true. Asking for down payments is important also with smaller deliveries especially when talking about customized solutions.";
var i42 = "Incorrect. This statement is not true. Asking for down payments is important also with smaller deliveries especially when talking about customized solutions.";

var q43 = "Advances received decrease the need for other collaterals/guarantees.";
var c43 = "Correct! This statement is true. Advances received also considerably decrease company's risk as the supplier in case of a default by our customer.";
var i43 = "Incorrect. This statement is true. Advances received also considerably decrease company's risk as the supplier in case of a default by our customer.";

// BUTTONS

var nextBtn = "<img class='nextbtn1' src='images/nextbtn1.png'><img class='nextbtn2' src='images/nextbtn2.png'>";
var trueFalse = "<button class='trueFalse' id='truebtn' value='true' type='button'>True</button> <b class='btnText'>or</b> <button class='trueFalse' id='falsebtn' value='false' type='button'>False</button>";



/* MODAL QUESTION & ANSWER FUNCTIONS */

var columnId = "";
var head = document.getElementById("headtxt");
var buttons = document.getElementById("btns");
var body = document.getElementById("bodytxt");
var nextB = document.getElementById("nextbtn");
var columnCount = 0;


// DISPLAY QUESTION & TRUE/FALSE BUTTONS
function displayQuestion(nextQ) {
    body.innerHTML = "";
    nextB.innerHTML = "";
    head.innerHTML = nextQ;
    buttons.innerHTML = trueFalse;
}

// LISTEN FOR BUTTON CLICKS, DETERMINE RIGHT ANSWER
function setAnswers(answer1, answer2) {
    var trueB = document.getElementById("truebtn");
    var falseB = document.getElementById("falsebtn");

    trueB.onclick = function () {
        console.log("True -button clicked!");
        displayAnswer(answer1);
    }

    falseB.onclick = function () {
        console.log("False -button clicked!");
        displayAnswer(answer2);
    }
}

// DISPLAY RIGHT ANSWER AFTER BUTTON CLICK
function displayAnswer(answer) {
    buttons.innerHTML = "";
    body.innerHTML = answer;
    nextB.innerHTML = nextBtn;
}

// DISPLAY MODAL
function displayModal() {
    $('#myModal').show();
}

// CALL FOR FUNCTIONS DEPENDING ON COLUMN NUMBER
function modalquestion(columnId) {
    buttons.innerHTML = trueFalse;

    if (columnId === 1) {
        displayQuestion(q11);
        displayModal();
        setColumn1();
        columnCount++;

    } else if (columnId === 2) {
        displayQuestion(q21);
        displayModal();
        setColumn2();
        columnCount++;

    } else if (columnId === 3) {
        displayQuestion(q31);
        displayModal();
        setColumn3();
        columnCount++;

    } else if (columnId === 4) {
        displayQuestion(q41);
        displayModal();
        setColumn4();
        columnCount++;
    }
}

/* COLUMN QUESTIONS & ANSWERS */
// QUESTIONS & ANSWERS IN COLUMN 1

function setColumn1() {
    setAnswers(c11, i11);

    nextB.onclick = function () {
        displayQuestion(q12);
        setAnswers(c12, i12);


        nextB.onclick = function () {
            displayQuestion(q13);
            setAnswers(i13, c13);

            nextB.onclick = function () {
                $('#myModal').hide();

                if (columnCount === 4) {
                    console.log("All columns done!");
                    $('#nextpage2').css('display', 'inline');
                }

            }
        }
    }
}

// QUESTIONS & ANSWERS IN COLUMN 2

function setColumn2() {
    setAnswers(c21, i21);

    nextB.onclick = function () {
        displayQuestion(q22);
        setAnswers(c22, i22);


        nextB.onclick = function () {
            displayQuestion(q23);
            setAnswers(i23, c23);


            nextB.onclick = function () {
                $('#myModal').hide();

                if (columnCount === 4) {
                    console.log("All columns done!");
                    $('#nextpage2').css('display', 'inline');
                }

            }
        }
    }
}

// QUESTIONS & ANSWERS IN COLUMN 3

function setColumn3() {
    setAnswers(c31, i31);

    nextB.onclick = function () {
        displayQuestion(q32);
        setAnswers(c32, i32);


        nextB.onclick = function () {
            displayQuestion(q33);
            setAnswers(i33, c33);

            nextB.onclick = function () {
                $('#myModal').hide();

                if (columnCount === 4) {
                    console.log("All columns done!");
                    $('#nextpage2').css('display', 'inline');
                }

            }
        }
    }
}

// QUESTIONS & ANSWERS IN COLUMN 2

function setColumn4() {
    setAnswers(c41, i41);

    nextB.onclick = function () {
        displayQuestion(q42);
        setAnswers(i42, c42);


        nextB.onclick = function () {
            displayQuestion(q43);
            setAnswers(c43, i43);

            nextB.onclick = function () {
                $('#myModal').hide();

                if (columnCount === 4) {
                    console.log("All columns done!");
                    $('#nextpage2').css('display', 'inline');
                }

            }
        }
    }
}
