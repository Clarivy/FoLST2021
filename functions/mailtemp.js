let Template = {
    HTMLTemplate: (name) => {
        return `
    <table style="width:600px;margin-left:auto;margin-right:auto;margin-top:3%;margin-bottom:3%">
    <tr>
        <td>
            <img src="https://raw.githubusercontent.com/DevFest-India/website-data/master/emailimg2.png" style="width:100%">
        </td>
    </tr>
    <tr>
        <td>
            <div style="margin:20px">
                <font face="Google Sans" color="#444444">
                    <p>Hi ${name.split(' ')[0]},</p>
                    <p><b>Congratulations!</b> You are confirmed to attend one of the largest developer conclaves in the country - <b>#DevFestIndia</b>.</p>

                    <p>We highly appreciate your enthusiasm and energy and would love to see you onboard along with your friends and family.</p>
 
                    <p>Spread the word to your circle of developers by asking them to register <a style="color:#0005DF;text-decoration:none" href="https://devfestindia.com/registration">here</a>. We can be a part of this mega developer festival, together.
                    </p>
 
                    <p>Keep an eye on your mailbox as we intend to send the important details about the event in the month of October. Till then, stay tuned to our <a href="https://devfestindia.com" style="color:#0005DF;text-decoration:none">website </a> for the details on the speakers and schedule.</p>
                    <br/>

                    <a href="https://devfestindia.com" style="background:#0005DF;color:white;padding: 8px 15px;cursor: pointer;text-decoration:none;margin-right:8px">See More</a>  
                    
                    <a href="https://badge.devfestindia.com/" style="border:1px solid #0005DF;color:#0005DF;padding: 7px 15px;cursor: pointer;text-decoration:none;margin-right:8px">Generate Profile Badge</a> 
                    <br/><br/>

                    <p>Follow us on <a style="color:#0005DF;text-decoration:none" href="https://twitter.com/DevFestIndia">Twitter</a> and keep an eye on <a style="color:#0005DF;text-decoration:none" href="https://twitter.com/hashtag/DevFestIndia">#DevFestIndia</a> for the latest updates and news about the event.</p>
                    <p>Regards,<br/>Team DevFest India</p>
                </font>
            </div>
        </td>
    </tr>
    <tr style="background:#f3f3f3">
        <td>
            <div style="text-align:center">
                <font face="Google Sans">
                    <h3 style="color:#0005DF;margin-bottom:0">DevFest India</h3>
                    <a style="color:#0005DF;text-decoration:none" href="https://twitter.com/DevfestIndia">Twitter</a> 
                    | <a style="color:#0005DF;text-decoration:none" href="https://www.youtube.com/channel/UCJsZoFDt7rfxPBI1esak8JQ">Youtube</a> 
                    | <a style="color:#0005DF;text-decoration:none" href="https://devfestindia.com">Website</a>
                  <br>
                  <br>
                </font>
            </div>
        </td>
    </tr>
</table>

    `;
    },
};

module.exports = Template
//   <p>You may add the event details to your Google Calender, <a href="https://devfestindia.com" style="color:#0005DF;text-decoration:none">here</a>.</p>
