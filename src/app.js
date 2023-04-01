let timely = document.querySelector('.timely');

timely.addEventListener('click', (e) => {
    let times = document.querySelectorAll('.timely > div');
    times.forEach(time => {
        time.classList.remove('active');
    });
    e.target.classList.add('active');
});


let daily = document.querySelector('.daily');
let weekly = document.querySelector('.weekly');
let monthly = document.querySelector('.monthly');


daily.addEventListener('click', getDaily);
weekly.addEventListener('click', getWeekly);
monthly.addEventListener('click', getMonthly);

let workTime = document.querySelector('.work .time');
let workLastweek = document.querySelector('.work .last-week');

let playTime = document.querySelector('.play .time');
let playLastweek = document.querySelector('.play .last-week');

let studyTime = document.querySelector('.study .time');
let studyLastweek = document.querySelector('.study .last-week');

let exerciseTime = document.querySelector('.exercise .time');
let exerciseLastweek = document.querySelector('.exercise .last-week');

let socialTime = document.querySelector('.social .time');
let socialLastweek = document.querySelector('.social .last-week');

let selfCareTime = document.querySelector('.selfCare .time');
let selfCareLastweek = document.querySelector('.selfCare .last-week');

function getDaily() {
    workTime.innerText = '5hrs';
    workLastweek.innerText = 'last week = 7hrs';

    playTime.innerText = '1hrs';
    playLastweek.innerText = 'last week = 2hrs';

    studyTime.innerText = '0hrs';
    studyLastweek.innerText = 'last week = 1hrs';

    exerciseTime.innerText = '1hrs';
    exerciseLastweek.innerText = 'last week = 1hrs';

    socialTime.innerText = '1hrs';
    socialLastweek.innerText = 'last week = 3hrs';

    selfCareTime.innerText = '0hrs';
    selfCareLastweek.innerText = 'last week = 1hrs';
};

function getWeekly() {
    workTime.innerText = '32hrs';
    workLastweek.innerText = 'last week = 36hrs';

    playTime.innerText = '10hrs';
    playLastweek.innerText = 'last week = 8hrs';

    studyTime.innerText = '4hrs';
    studyLastweek.innerText = 'last week = 7hrs';

    exerciseTime.innerText = '4hrs';
    exerciseLastweek.innerText = 'last week = 5hrs';

    socialTime.innerText = '5hrs';
    socialLastweek.innerText = 'last week = 10hrs';

    selfCareTime.innerText = '2hrs';
    selfCareLastweek.innerText = 'last week = 2hrs';
};

function getMonthly() {
    workTime.innerText = '103hrs';
    workLastweek.innerText = 'last week = 128hrs';

    playTime.innerText = '23hrs';
    playLastweek.innerText = 'last week = 29hrs';

    studyTime.innerText = '13hrs';
    studyLastweek.innerText = 'last week = 19hrs';

    exerciseTime.innerText = '11hrs';
    exerciseLastweek.innerText = 'last week = 18hrs';

    socialTime.innerText = '21hrs';
    socialLastweek.innerText = 'last week = 23hrs';

    selfCareTime.innerText = '7hrs';
    selfCareLastweek.innerText = 'last week = 11hrs';
};