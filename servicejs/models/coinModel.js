const mongoose = require('mongoose');

const coinSchema=new mongoose.Schema({
    success:{
        type:Boolean,
        default:true
    },
    fluctuation:{
        type:Boolean,
        default:true
    },
    start_date:{
        type:Date
    },
    end_date:{
        type:Date,
        default:Date.now()
    },
    base:{
        type:String,
        default:"Euro"
    },
    rates:{
        USD:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
        TRY:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
        JPY:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
        XRP:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
        BTC:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
        ETH:{
            start_rate:{
                type:Number
            },
             end_rate:{
                type:Number
            },
            change:{
                type:Number
            },
            change_pct:{
                type:Number
            },
        },
    }
})



module.exports=mongoose.model('Crypto',coinSchema);
