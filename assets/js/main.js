$(document).ready(function () {
    // Answer to First Question
    $("input[name=question1]").change(function (e) {
        e.preventDefault();
        $("input[name=question1]").attr("disabled", "disabled");
        console.log("hi")
        var a1 = $("input[name=question1]:checked").val();
        var result = {
            "Question_Id": "1",
            "Event_Id": 7,
            "Answer": 6 - a1,
            "Description": ""
        }
        xhr = new XMLHttpRequest();
        var url = "https://cmisfahan.ir/api/suggestion";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.name)
            }
        }
        var data = JSON.stringify(result);
        xhr.send(data);
        console.log(data)
    });
    // Answer to Second Question
    $("input[name=question2]").change(function (e) {
        e.preventDefault();
        $("input[name=question2]").attr("disabled", "disabled");
        console.log("hi")
        var a2 = $("input[name=question2]:checked").val();
        var result = {
            "Question_Id": "2",
            "Event_Id": 7,
            "Answer": 6 - a2,
            "Description": ""
        }
        fetch('https://cmisfahan.ir/api/suggestion', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    });
    // Answer to 3rd Question
    $("input[name=question3]").change(function (e) {
        e.preventDefault();
        $("input[name=question3]").attr("disabled", "disabled");
        console.log("hi")
        var a3 = $("input[name=question3]:checked").val();
        var result = {
            "Question_Id": "3",
            "Event_Id": 7,
            "Answer": 6 - a3,
            "Description": ""
        }
        xhr = new XMLHttpRequest();
        var url = "https://cmisfahan.ir/api/suggestion";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.name)
            }
        }
        var data = JSON.stringify(result);
        xhr.send(data);
        console.log(data)
    });
    // Answer to 4th Question
    $("input[name=question4]").change(function (e) {
        e.preventDefault();
        $("input[name=question4]").attr("disabled", "disabled");
        console.log("hi")
        var a4 = $("input[name=question4]:checked").val();
        var result = {
            "Question_Id": "4",
            "Event_Id": 7,
            "Answer": 6 - a4,
            "Description": ""
        }
        xhr = new XMLHttpRequest();
        var url = "https://cmisfahan.ir/api/suggestion";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.name)
            }
        }
        var data = JSON.stringify(result);
        xhr.send(data);
        console.log(data)
    });
    // Answer to 5th Question
    $("input[name=question5]").change(function (e) {
        e.preventDefault();
        $("input[name=question5]").attr("disabled", "disabled");
        console.log("hi")
        var a5 = $("input[name=question5]:checked").val();
        var result = {
            "Question_Id": "5",
            "Event_Id": 7,
            "Answer": 6 - a5,
            "Description": ""
        }
        xhr = new XMLHttpRequest();
        var url = "https://cmisfahan.ir/api/suggestion";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.name)
            }
        }
        var data = JSON.stringify(result);
        xhr.send(data);
        console.log(data)
    });
    // Answer to 6th Question
    $("textarea[name=jozei]").change(function (e) {
        e.preventDefault();
        console.log("hi")
        var a6 = $("textarea[name=jozei]").val();
        var result = {
            "Question_Id": "6",
            "Event_Id": 7,
            "Answer": "",
            "Description": a6
        }
        xhr = new XMLHttpRequest();
        var url = "https://cmisfahan.ir/api/suggestion";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.name)
            }
        }
        var data = JSON.stringify(result);
        xhr.send(data);
        console.log(data)
    });
});