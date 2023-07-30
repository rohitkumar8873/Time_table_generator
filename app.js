const btnreset=document.getElementById('btnreset');
const tex=document.getElementsByClassName('tex');
const input=document.querySelectorAll('textarea');
const help=document.getElementById('btnhelp');
const section=document.getElementsByClassName('section-1');
const btn=document.getElementsByClassName('btn');
const printpage=document.getElementById('btnprint');
const main=document.getElementById('main');
const print=document.getElementById('print');
const table2=document.getElementById('tablebox2');



btnreset.addEventListener('click',function(){
    if(confirm("Are You Sure?")){
        for(let i=0; i<input.length; i++){
            input[i].value='';     
        }
        for(let i=0; i<section.length; i++){
            section[i].value=''
        }
    }
});




help.addEventListener('click',function(){
    alert('Type Your Routine in the Box \nPress RESET to reset \n Press Print to print your Time Table');
})

printpage.addEventListener('click',function(){
    
    if(confirm('Are You sure?')) {
        html2pdf(main,{
            margin:       0,
            filename:     'timeTable.pdf',
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'Tabloid', orientation: 'landscape' }
        });
    }
})
