import Service from '@ember/service';
import $ from 'jquery'
import RSVP from 'rsvp';

export default Service.extend({
    getMemos: function(){
        return new RSVP.Promise(function(resolve, reject){
            var request = $.ajax({
                type: "GET",
                url: 'http://localhost:5803/api/GetMemo/55',
                contentType:'application/json',
            });

            request.done(function (response){
                resolve(response);
            });
            request.fail(function (response){
                reject(response);
            });
        });
    },      
    
});
