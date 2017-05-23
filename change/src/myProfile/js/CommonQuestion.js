/**
 * Created by qinchen on 2017/5/18.
 */
import React, {Component} from "react";
import { Router, Route, Link } from 'react-router'



class CommonQuestion extends Component{
    render() {
        return(
            <div className="CommonQuestionContent">
                <h1>关于『发单』</h1>
                <p className="question">律师合作的价位普遍是多少？</p>
                <p className="answer">通常查询档案的每单价格在500至1000元不等，根据档案类型与地区不同，也会出现低于或者高于该价格区间的情况。执行与代理的费用则会依具体案件情况而定。建议有律师应征之后，尽快与应征律师沟通确定最终价格。</p>
                <p className="question">『查档类型』中没有我想要的选择怎么办？</p>
                <p className="answer">如果您在『查档类型』中没有寻找到您的需求选项，请在『查档类型』页面底端找到『其它类型』，在输入框中键入相应的需求。</p>
                <p className="question">发单后，我如何收到律师应征的提示？</p>
                <p className="answer">律师应征后，我们将通过『公众号推送提示』与『发送短信』的方式提醒您与应征律师沟通。您也可以通过页面的『订单』按键查看您的订单状态。</p>
                <p className="question">发单后多久会有律师联系我？</p>
                <p className="answer">发单后您一般会在十分钟之内收到律师应征的提示，请从应征列表中筛选出您满意的律师并与对方联系。</p>
                <p className="question">我的订单会有多少律师应征？</p>
                <p className="answer">查档、执行、合作、其他事项订单同一时间允许最多五名律师同时应征；请教不限制回答律师人数。</p>
                <p className="question">应征的律师不能满足我的要求怎么办？</p>
                <p className="answer">如果您与应征律师沟通后未能协商一致，您可以点击『换个律师』，系统将向您推送该地的其它律师应征。被更换的律师将不能再次接单。</p>
                <p className="question">律师的应征报价是否等于最终的价格？</p>
                <p className="answer">如果在协商中，您与应征律师对最终价格有所调整，您可以在点击『确认律师』弹出的价格修改窗口中输入更改后的最终价格。</p>
                <p className="question">我应该什么时候支付酬劳？</p>
                <p className="answer">在您与应征律师协商一致后，通过点击『输入价格』，输入最终价格并支付，『无讼合作』将托管您的钱款。只有在您收到材料并点击『确认完成』后，钱款才会支付给接单律师。如果合作失败，请联系无讼合作小秘书（微信号：17184035300 ），我们会在24小时内将钱款如数返还您的微信账户。</p>
                <p className="question">我要修改身份怎么办？</p>
                <p className="answer">在『我的』页面，点击『我的设置』，选择『我的身份』修改您的身份即可。</p>
                <h1>关于『接单』</h1>
                <p className="question">我怎么知道有发单律师需要在本地查档或者执行呢？</p>
                <p className="answer">当您完善『无讼名片』的相关地域信息后，如果有律师在您所执业的区域发布合作需求，我们的『无讼合作』公众号将会给您发送消息提示您。您也可以在『无讼合作』平台首页上点击顶部筛选栏填写『地域』查找您所在地附近暂时未被接走的订单。</p>
                <p className="question">我应征后，其他律师还可以就同一订单应征吗？</p>
                <p className="answer">查档、执行、案件合作都允许5人同时应征，当应征满额后该订单将会被隐藏，其他律师将不能同时应征。只有当这5名律师与发单律师未能合作成功，发单律师点击『换个律师』后，其他律师才能应征。</p>
                <p className="question">查档订单，应征后怎么与发单律师联系？</p>
                <p className="answer">应征后，发单律师将收到提示并与您沟通，您只需耐心等待即可。</p>
                <p className="question">我为什么看不到发单律师联系方式？</p>
                <p className="answer">因为应征律师较多，实行发单律师单向联系的制度，您可以完善信息后等待发单律师联系您。当然，如果长时间未得到联络，您也可以要求无讼合作小秘书帮您连线。</p>
                <p className="question">应征失败后，我还能再次接同一订单吗？</p>
                <p className="answer">发单律师点击『换个律师』后，您的应征即告失败，您将不能再次应征同一订单。因此，无讼合作在这里提醒您：合理报价，积极沟通。</p>
                <p className="question">应征报价后，价格变动怎么办呢？</p>
                <p className="answer">在您与发单律师充分沟通合作细节时，很可能出现价格变动的情况。如需修改合作价格，您提醒发单律师在『输入价格』的步骤中输入最终的成交价格就可以了。</p>
                <p className="question">应征后怎么与发单律师联系？</p>
                <p className="answer">应征后，发单律师将收到提示并与您沟通。</p>
                <p className="question">我应该什么时候开始任务？</p>
                <p className="answer">您与发单律师协商一致后，您需要提醒发单律师点击『输入价格』按钮，输入最终价格并支付。待您收到『无讼合作公众号』提示『钱款已托管』的推送后，您即需要 开始着手完成合作。</p>
                <p className="question">钱款托管在平台安全吗？是否要收取手续费用？</p>
                <p className="answer">“无讼合作”平台收到的钱款均储存在微信，进行专项支付。平台本身不收取任何中介费用。钱款的安全性与支付速度值得您的依赖。</p>

            </div>


        );

    }
}
export default CommonQuestion;