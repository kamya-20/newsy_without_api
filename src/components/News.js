import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    articles=[
        
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Karen Gilchrist",
        "title": "Shares of fashion giant H&M drop as fourth-quarter sales miss estimates - CNBC",
        "description": "Shares of H&M dropped more than 5% on Thursday after the world's second-largest retailer missed sales forecasts in the fourth quarter.",
        "url": "https://www.cnbc.com/2025/01/30/hm-hmb-earnings-q4-full-year-fy24.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108094064-1738159415619-gettyimages-2193637527-dsc_4005_d0p4nxqc.jpeg?v=1738159463&w=1920&h=1080",
        "publishedAt": "2025-01-30T07:32:47Z",
        "content": "Shares of H&amp;M dropped more than 5% on Thursday after the world's second-largest retailer missed sales forecasts in the fourth quarter.\r\nSales at the Swedish fashion giant came in at 62.19 billion… [+2829 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNBC"
        },
        "author": "Sam Meredith",
        "title": "Oil giant Shell posts larger-than-expected drop in full-year profit on lower crude prices - CNBC",
        "description": "British oil giant Shell on Thursday reported a significant drop in annual profit following a year of lower crude prices.",
        "url": "https://www.cnbc.com/2025/01/30/shell-earnings-full-year-and-q4-2024.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/108094052-1738158569863-gettyimages-2151322364-01-bb1_2324-_a8y3vjph.jpeg?v=1738158642&w=1920&h=1080",
        "publishedAt": "2025-01-30T07:10:24Z",
        "content": "A Shell logo is displayed on May 03, 2024 in Austin, Texas.\r\nBritish oil giant Shell on Thursday reported a significant drop in annual profit, citing higher exploration write-offs, lower trading marg… [+5351 chars]"
        },
        
        {
        "source": {
        "id": null,
        "name": "Tom's Guide"
        },
        "author": "Jason England",
        "title": "It doesn't matter if DeepSeek copied OpenAI — the damage has already been done in the AI arms race - Tom's Guide",
        "description": "Your move, Sam Altman",
        "url": "https://www.tomsguide.com/ai/it-doesnt-matter-if-deepseek-copied-openai-the-damage-has-already-been-done-in-the-ai-arms-race",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/tRQkLM2y6DDdpYEHVHtBSi-1200-80.jpg",
        "publishedAt": "2025-01-30T05:48:12Z",
        "content": "This whole DeepSeek copying ChatGPT accusation from OpenAI and Microsoft reminds me of a lesson I’ve learned over the past 15 years of writing about this stuff — most people do not care if something … [+5860 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investopedia"
        },
        "author": "Timothy Smith",
        "title": "Watch These Tesla Stock Price Levels After Post-Earnings Surge - Investopedia",
        "description": "Tesla shares gained ground in extended trading on Wednesday as optimism over the automaker's self-driving outlook trumped fourth-quarter results that came in below Wall Street’s expectations. Monitor these crucial chart levels.",
        "url": "https://www.investopedia.com/tesla-stock-price-levels-to-watch-after-q4-earnings-self-driving-vehicles-8782879",
        "urlToImage": "https://www.investopedia.com/thmb/cSAcmE4a3rWIocdaFrT8HjfIF5A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TSLAChart-ee612eaba225408080087784093d42fc.gif",
        "publishedAt": "2025-01-30T03:55:24Z",
        "content": "<ul><li>Tesla shares gained ground in extended trading on Wednesday as optimism over the automaker's self-driving outlook trumped fourth-quarter results that came in below Wall Streets expectations.<… [+4095 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Aditya Soni and Deborah Mary Sophia",
        "title": "Microsoft, Meta CEOs defend hefty AI spending after DeepSeek stuns tech world - Yahoo Finance",
        "description": "(Reuters) -Days after Chinese upstart DeepSeek revealed a breakthrough in cheap AI computing that shook the U.S. technology industry, the chief executives of...",
        "url": "https://finance.yahoo.com/news/microsoft-meta-ceos-defend-hefty-014927236.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/854a9363f64eb858b31f98f50512f289",
        "publishedAt": "2025-01-30T03:23:00Z",
        "content": "By Aditya Soni and Deborah Mary Sophia\r\n(Reuters) -Days after Chinese upstart DeepSeek revealed a breakthrough in cheap AI computing that shook the U.S. technology industry, the chief executives of M… [+2823 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "pymnts.com"
        },
        "author": "PYMNTS",
        "title": "Amazon to Eliminate ‘Small Number’ of Roles in Communications Department - PYMNTS.com",
        "description": "Amazon’s communications department is reportedly the latest segment of the company’s corporate workforce to see layoffs. The company is laying off dozens",
        "url": "https://www.pymnts.com/amazon/2025/amazon-to-eliminate-small-number-of-roles-in-communications-department/",
        "urlToImage": "https://www.pymnts.com/wp-content/uploads/2024/09/Amazon.jpg",
        "publishedAt": "2025-01-30T02:48:45Z",
        "content": "Amazons communications department is reportedly the latest segment of the companys corporate workforce to see layoffs.\r\nThe company is laying off dozens of people in the department, Bloomberg reporte… [+2104 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "Motley Fool Transcribing",
        "title": "Microsoft (MSFT) Q2 2025 Earnings Call Transcript - The Motley Fool",
        "description": "MSFT earnings call for the period ending December 31, 2024.",
        "url": "https://www.fool.com/earnings/call-transcripts/2025/01/29/microsoft-msft-q2-2025-earnings-call-transcript/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/1/featured-transcript-logo-template-2023-01-12.jpg",
        "publishedAt": "2025-01-30T02:15:11Z",
        "content": "MSFT earnings call for the period ending December 31, 2024.Image source: The Motley Fool.\r\nMicrosoft(MSFT -1.09%)Q2 2025 Earnings CallJan 29, 2025, 5:30 p.m. ET\r\nContents:\r\n<ul><li>Prepared Remarks</… [+54819 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SpaceNews"
        },
        "author": "Jason Rainbow",
        "title": "iPhone Starlink compatibility sends direct-to-smartphone stocks sliding - SpaceNews",
        "description": "Shares in direct-to-smartphone satellite players tumbled Jan. 29 after Apple enabled iPhones with a T-Mobile cellular plan to join beta tests for SpaceX’s rival service in the United States.",
        "url": "http://spacenews.com/iphone-starlink-compatibility-sends-direct-to-smartphone-stocks-sliding/",
        "urlToImage": "https://jetpack.com/redirect/?source=sigenerate&query=t%3DeyJpbWciOiJodHRwczpcL1wvc3BhY2VuZXdzLmNvbVwvd3AtY29udGVudFwvdXBsb2Fkc1wvMjAyNFwvMDNcL09TX01UTl8yMjcwNjMwOTEzLTEtMTAyNHg2NTAuanBnIiwidHh0IjoiaVBob25lIFN0YXJsaW5rIGNvbXBhdGliaWxpdHkgc2VuZHMgZGlyZWN0LXRvLXNtYXJ0cGhvbmUgc3RvY2tzIHNsaWRpbmdcdTAwYTAiLCJ0ZW1wbGF0ZSI6ImRvaXMiLCJibG9nX2lkIjo4MDY4MTk3OX0.7BIbf7AXc8eVdmqhPbEpvKK7CE9k6T_Q1-QVVtUC8qsMQ",
        "publishedAt": "2025-01-30T01:39:26Z",
        "content": "ORLANDO, Fla. Shares in direct-to-smartphone satellite players tumbled Jan. 29 after Apple enabled iPhones with a T-Mobile cellular plan to join beta tests for SpaceXs rival Starlink service in the U… [+3206 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Jeannine Mancini",
        "title": "Larry Ellison, Oracle Co-Founder And One Of Richest Men In The World, Saw His Net Worth Dip $22.6 Billion In One Day Due To DeepSeek Selloff - Yahoo Finance",
        "description": "Larry Ellison, the Oracle (NYSE:ORCL) co-founder and one of the richest people on the planet, watched $22.6 billion disappear in a single day on January 27...",
        "url": "https://finance.yahoo.com/news/larry-ellison-oracle-co-founder-013235399.html",
        "urlToImage": "https://media.zenfs.com/en/Benzinga/d87175ea4d87d9206e1837aabd0944d4",
        "publishedAt": "2025-01-30T01:32:00Z",
        "content": "Larry Ellison, Oracle Co-Founder And One Of Richest Men In The World, Saw His Net Worth Dip $22.6 Billion In One Day Due To DeepSeek Selloff\r\nLarry Ellison, the Oracle (NYSE:ORCL) co-founder and one … [+3614 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Financial Times"
        },
        "author": "George Hammond, Stephen Morris, Arash Massoudi, David Keohane",
        "title": "SoftBank in talks to invest up to $25bn in OpenAI - Financial Times",
        "description": "Deal would make Japanese group the biggest financial backer in ChatGPT maker",
        "url": "https://www.ft.com/content/6a482d4f-0c90-47bf-a4c2-67a2f1b743b1",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F1300782c-b76d-4f9a-8b05-5e6f1bef3ca5.jpg?source=next-barrier-page",
        "publishedAt": "2025-01-30T01:07:39Z",
        "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>FT Digital Edition<li>Global n… [+105 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Amanda Gerut",
        "title": "Elon Musk claims full self driving is so advanced Tesla owners are turning it off and steering with their knees to check text messages - Fortune",
        "description": "The advanced driver assistance feature beeps when people take their hands off the steering wheel.",
        "url": "https://fortune.com/2025/01/29/elon-musk-full-self-driving-tesla-earnings-texts-steering-email-beeps/",
        "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2025/01/GettyImages-2194387923-e1738197194471.jpg?resize=1200,600",
        "publishedAt": "2025-01-30T00:43:00Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "Minneapolis Star Tribune"
        },
        "author": "Bill Lukitsch, Bill Lukitsch",
        "title": "Property insurance rates in Minnesota climbing fast with no end in sight - Star Tribune",
        "description": "“It’s a disaster, quite frankly,” a longtime agency owner said of the industry, which has suffered heavy losses in recent years.",
        "url": "https://www.startribune.com/minnesota-disaster-natural-la-wildfire-cost-insurance/601213718",
        "urlToImage": "https://arc.stimg.co/startribunemedia/FNQRSF2Z2RASXP7V76JKJ4XO7U.jpg?&w=1200&ar=1.91:1&fit=crop",
        "publishedAt": "2025-01-30T00:15:39Z",
        "content": "Like many of her clients, insurance agent LuAnn Paulet has wished for a bad hailstorm.\r\nProperty owners have forever viewed their policies as maintenance contracts, she said, keeping fingers crossed … [+1766 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Andrew J. Hawkins",
        "title": "Tesla will launch unsupervised driving in June, Musk says - The Verge",
        "description": "Elon Musk is making yet another promise about driverless cars.",
        "url": "https://www.theverge.com/news/602746/tesla-fsd-unsupervised-launch-austin-june",
        "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/01/STKE001_STK086_Tesla_Robotaxi_C.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
        "publishedAt": "2025-01-29T23:55:23Z",
        "content": "The service will launch in Austin, Texas, this summer.\r\nThe service will launch in Austin, Texas, this summer.\r\nTesla will launch an unsupervised, no one in the car robotaxi service in Austin, Texas,… [+3215 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "HALLIE GOLDEN",
        "title": "First independently developed jet breaks the sound barrier over the California desert - The Associated Press",
        "description": "A sleek white aircraft has become the first independently developed jet to break the sound barrier. The XB-1 aircraft accelerated to Mach 1.05 within about 11 minutes of taking off Tuesday. It tore through the air tens of thousands of feet above the Mojave De…",
        "url": "https://apnews.com/article/supersonic-flight-california-boom-sound-barrier-5a38f602ad6453939885af682827a69e",
        "urlToImage": "https://dims.apnews.com/dims4/default/c3c408e/2147483647/strip/true/crop/6000x3375+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2F3b%2F3bf4cbefd8e808fd3d66c5a3946d%2F340354c3097c486a846d071ad37ac843",
        "publishedAt": "2025-01-29T22:56:00Z",
        "content": "A sleek white aircraft became the first independently developed jet to break the sound barrier Tuesday, tearing through the air tens of thousands of feet above the Mojave Desert and a crowd of deligh… [+2237 chars]"
        },
        {
        "source": {
        "id": "associated-press",
        "name": "Associated Press"
        },
        "author": "MATT O'BRIEN",
        "title": "AI-assisted works can get copyright with enough human creativity, says US copyright office - The Associated Press",
        "description": "Artists can copyright works they made with the help of artificial intelligence, according to a new report by the U.S. Copyright Office that could help clear the way for the use of AI tools in Hollywood, the music industry and other creative fields. The nation…",
        "url": "https://apnews.com/article/ai-copyright-office-artificial-intelligence-363f1c537eb86b624bf5e81bed70d459",
        "urlToImage": "https://dims.apnews.com/dims4/default/8870de9/2147483647/strip/true/crop/5000x2813+0+260/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2F72%2F4566fff25033af3e2cc3d3868038%2F663f8e75dd40444fb48a1bb45dfbecff",
        "publishedAt": "2025-01-29T22:45:00Z",
        "content": "Artists can copyright works they made with the help of artificial intelligence, according to a new report by the U.S. Copyright Office that could further clear the way for the use of AI tools in Holl… [+2224 chars]"
        }
        ]

        constructor(){
            super();
            console.log("i am a constructor");
            this.state = {
                articles:this.articles,
                loading:false

            }
            
        }
  render() {
    
    return (
        
      <div className='container'>
        <h1 className='text-center my-3'>NewsMonkey-Top Headlines</h1>
        <div className="row">
        {this.state.articles.map((element)=>(
            <div className="col-md-4" key={element.url}>
             <Newsitem title={element.title} description = {element.description} imageUrl = {element.urlToImage} url={element.url}/>
            </div>
        ))
        }
        </div>
       
        
      </div>
    )
  }
}
