var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment")

var data = [
    {name: "Cloud's Rest", 
    image: "https://images.unsplash.com/photo-1465205568425-23fdd3805e49?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7e476dbc9096ec1c869bd2cb97d82c70",
    description: "Tousled hashtag brooklyn, sustainable 90's ramps ennui flannel meggings paleo microdosing brunch polaroid trust fund locavore. Farm-to-table put a bird on it freegan jean shorts, art party crucifix bushwick wayfarers listicle pug tilde keytar chicharrones occupy. Salvia XOXO cray schlitz, selfies venmo chambray. Narwhal selvage direct trade fixie scenester, hammock echo park 8-bit keytar. Direct trade mustache freegan post-ironic, chicharrones literally single-origin coffee try-hard knausgaard portland mixtape squid. Hashtag franzen kombucha, 8-bit tousled kitsch celiac authentic readymade cardigan slow-carb chia. Try-hard trust fund affogato quinoa neutra godard small batch.",
    },
    {name: "Mountain Bluff", 
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=61282cfeed75871385c84c2a44a8e594",
    description: "Tousled hashtag brooklyn, sustainable 90's ramps ennui flannel meggings paleo microdosing brunch polaroid trust fund locavore. Farm-to-table put a bird on it freegan jean shorts, art party crucifix bushwick wayfarers listicle pug tilde keytar chicharrones occupy. Salvia XOXO cray schlitz, selfies venmo chambray. Narwhal selvage direct trade fixie scenester, hammock echo park 8-bit keytar. Direct trade mustache freegan post-ironic, chicharrones literally single-origin coffee try-hard knausgaard portland mixtape squid. Hashtag franzen kombucha, 8-bit tousled kitsch celiac authentic readymade cardigan slow-carb chia. Try-hard trust fund affogato quinoa neutra godard small batch.",
    },
    {name: "Lake Timber", 
    image: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ea44e41f0b18d77930e5b15992a5cc15",
    description: "Tousled hashtag brooklyn, sustainable 90's ramps ennui flannel meggings paleo microdosing brunch polaroid trust fund locavore. Farm-to-table put a bird on it freegan jean shorts, art party crucifix bushwick wayfarers listicle pug tilde keytar chicharrones occupy. Salvia XOXO cray schlitz, selfies venmo chambray. Narwhal selvage direct trade fixie scenester, hammock echo park 8-bit keytar. Direct trade mustache freegan post-ironic, chicharrones literally single-origin coffee try-hard knausgaard portland mixtape squid. Hashtag franzen kombucha, 8-bit tousled kitsch celiac authentic readymade cardigan slow-carb chia. Try-hard trust fund affogato quinoa neutra godard small batch.",
    }
    ]

function seedDB(){
    //remove all campgrounds    
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        } else {
        console.log("removed campgrounds");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                 console.log(err)
                } else {
                    console.log("added a campground!");
                    //create comments
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err)
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment")
                            }
                        })
                }
            });
        });
        }
    });
}

module.exports = seedDB;