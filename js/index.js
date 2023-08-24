let we="SDsdfssd   dfsdfdsfds";
if(we.includes(" "))
{
   we=we.replace(" ","_");
   console.log(we);
}
else{
    console.log("there is no spaces in the gh")
}
let data;
let r=10;
let final_city="";
let all_countries=[];
let final_of_times="";
$(".city_div").hide();
function define_date(all_dates_array)
{
      let date=new Date();
     let rt=date.getDate()-1;
     let day=all_dates_array[rt];
     return day;
}
function genearte_tiems_prayers(times_prayer)
{
    let date=new Date();
    let rt=date.getDate()-1;
    times_prayer=times_prayer[rt];
    times_prayer=Object.entries(times_prayer);
    let final=new map(times_prayer);
    console.log(final);
}
function define_the_information(meta_inf,dates,city)
{
    let date=new Date();
    let rt=date.getDate()-1;
    meta_inf=meta_inf[rt];
    dates=dates[rt];
    $(".country_city_inf").html(`<h3 class="w-100">${city}</h3>
    <h4 class="w-100">${meta_inf.timezone}</h4>`);
    $(".date_inf").html(`
    <div class="universal w-100 ">
       <h2>${dates.readable}</h2>
    </div>
    <div class="higri w-100">
   <h3>higri:</h3>
   <h2>${dates.hijri.date}</h2>
    </div>`);
}
function generate_prayings(praying_times)
{
    let date=new Date();
    let rt=date.getDate()-1;
    praying_times=praying_times[rt];
    let map=new Map(Object.entries(praying_times));
    let div=``;
  map.forEach((value,key)=>
  {
     div+=`<div class="pray_time w-100 my-2">
    <h2 class="w-100">${key}</h2>
    <h3 class="w-100">${value}</h3>
    <hr class="border-4 border-danger">
    </div>`;  
  });
  $(".praying_time").html(div);

}
function generate_all_countries(countries)
{
    let all_countruies=``;
    for(let country of countries)
    {
            all_countries+=`<option value="${country}">${country}</option>`;
    }
    $("#browsers").html(all_countries);
}
function generate_cities(country,all_data)
{
  
    let the_specifiec_cities=all_data.filter(ele=>{
        console.log("hello")
   if(ele.country==country)
   {
    return ele.cities;
   }
    });
    return the_specifiec_cities;
}
function innerCities(country)
{
     let cities=``;
    country.forEach(ele=>
        
{
    if(ele.includes(" "))
{
   ele=ele.replace(" ","-");
   cities+=`<option value=${ele}>${ele}</option>`;
}
else{
    cities+=`<option value=${ele}>${ele}</option>`;
}
    
             
});
    $("#city").html(cities);
    $(".city_div").show(2000);
}
function get_city()
{
    return $("#city").val();
}
function requests_prayer_time(country,city)
{
    let times=[];
let date_p=[];
let meta=[];
    let request=new XMLHttpRequest();
    let date=new Date();
    let data_prayer="";
    let month=date.getMonth()+1;  
    let year=date.getFullYear();
    request.open("get",`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=${country}&method=2`);
    request.send();
    request.onreadystatechange=function()
    {
        if(this.readyState==4)
        {
            console.log("yarab");
            data_prayer=JSON.parse(this.responseText);
            final_of_times=data_prayer.data;
            // timtings of pray
            final_of_times.forEach(ele=>
                {
                    times.push(ele.timings);
                });
                final_of_times.forEach(ele=>
                    {
                        date_p.push(ele.date);
                    });
                    final_of_times.forEach(ele=>
                        {
                            meta.push(ele.meta); 
                        });
                        console.log(times);
                        console.log(date_p);
                        console.log(meta);
                        console.log(define_date(date_p).readable);
                        define_the_information(meta,date_p,final_city);
                        generate_prayings(times);
        }
}
}
function request_api()
{
    let request=new XMLHttpRequest();
    request.open("get","https://countriesnow.space/api/v0.1/countries");
    request.send();
    
    request.onreadystatechange=function()
    {
        if(this.readyState==4)
        {
            console.log("yarab");
           data=JSON.parse(this.responseText).data;
         console.log(data);
         data.forEach(ele=>all_countries.push(ele.country));
         console.log(all_countries);
         generate_all_countries(all_countries);
       document.getElementById("browsers").addEventListener("change",function()
         {
            console.log($(this).val());
            let r=generate_cities($(this).val(),data);
           innerCities(r[0].cities);
             document.getElementById("city").addEventListener("change",function (e) {
                final_city=get_city();
                requests_prayer_time($("#browsers").val(),final_city);
                console.log($("#browsers").val());
               })
          
         })

        }
    }
}

$(document).ready(function()
{
    request_api("SDf");
if("22 Aug 2023"==define_date("sd"))
{
    console.log("yes the tow date is simalr");

}
else{
    console.log("no the two dates is not similar");
}
});
$(".oney").blur(function()
{
    console.log(r);
    r++;
    console.log(r);
})
if(r===10)
{
    console.log(r);
}
r++;
console.log(r);
function change_input()
{
    console.log("helo");
$("input").keyup(function (e) { 
    console.log("helo fron the inner function");
    function hj()
    {
        console.log($("input").val());
        console.log("******************* ******************* ********************* ")
    }    
    hj();
}
)
}