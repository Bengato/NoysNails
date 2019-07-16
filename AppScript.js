$(document).ready(function(){
    $('#loginsubmit').click(function(){
        var username=$('#username').val();
        var password=$('#password').val();
        if(username=="ben"&&password=="123456"){
                $.mobile.changePage("#home", { transition: "fade"});
                $('#lblGreet').text('היי, '+username+" !");
        }
        else
            $('#wrong').text('שם משתמש או סיסמא לא נכונים!');
            $('#password').val('');
    });
    $('#cancelorder').click(function(){
        $.mobile.changePage("#home", { transition: "fade"});
        $('#checkIn').text("הזמנת התור בוטלה !");
    });
    $('#confirmorder').click(function(){
        // get date picked and convert to yyyymmdd format
        var datePicked =new Date($("#datepick").val());
        alert(datePicked);
        var myDatePicked=datePicked.getYear().toString()+(datePicked.getMonth()+1).toString()+ datepicked.getDate().toString();
        myDatePicked=datePicked.getDate('yyyymmdd');
        alert(myDatePicked);
        intDatepicked=parseInt(myDatePicked);
        alert('hh '+intDatePicked);

        // get today in yyyymmdd format
        var d = new Date();
        var today = d.getFullYear().toString() + (d.getMonth()+1).toString() + d.getDate().toString();
        today=parseInt(today);
        alert('gg '+today);

        if(datePicked<today)
        {
            $.mobile.changePage("#booking", { transition: "fade"});
            $('#dateError').text("יש להזין תאריך חוקי!");
        }
        else
        {
            $.mobile.changePage("#home", { transition: "fade"});
            $('#checkIn').text("התור נקבע בהצלחה !");
        }
    });




  
    
});



