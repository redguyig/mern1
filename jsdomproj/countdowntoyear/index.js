const targetdate= new Date('2025-01-01T00:00:00');
function updateCountdown(){
    const currentdate= new Date();
    const timeDifference = targetdate-currentdate;
    const days=Math.floor(timeDifference/(1000*60*60*24));
    const hours= Math.floor(timeDifference%(1000*60*60*24)/ (1000*60*60));
    const minutes=Math.floor((timeDifference%(1000*60*60))/(1000*60));
    const sec= Math.floor((timeDifference%(1000*60))/1000);        

    document.getElementById('countdown').innerHTML=`${days}Days  ${hours}Hours   ${minutes}Minutes   ${sec}Seconds`;

    setTimeout(updateCountdown,1000);
}

updateCountdown();