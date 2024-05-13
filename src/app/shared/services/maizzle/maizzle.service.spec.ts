import {TestBed} from '@angular/core/testing';

import {MaizzleService} from './maizzle.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {NewsSentimentInterface} from "../../../../models/news-sentiment-interface";

const MockNewsSentiment = {
  "data": {
    "date": "2024-02-12",
    "broker_id": 859,
    "logo": "https://brokerslogos.autochartist.com/00faef57-d2b4-43a6-b991-a5969ae75734.png",
    "header": {
      "trade_now_url": "https://www.autochartist.com/?ticker={ticker}",
      "trade_now_button_text": "Trade now",
      "email_heading": "News Sentiment"
    },
    "body": {
      "score": "Score",
      "unsubscribe": "Unsubscribe",
      "change": "Change "
    },
    "conditionals": {
      "custom_disclaimer": true,
      "read_left": "ltr"
    },
    "template_path": "news-sentiment",
    "email_name": "news-sentiment",
    "significant_sentiment": [
      {
        "short_name": "SMCI",
        "long_name": "Super Micro Computer, Inc.",
        "summary": "The overall mood towards this stock has turned significantly positive.",
        "score": "69",
        "colour": "#047857"
      }
    ],
    "extreme_score_change": [
      {
        "short_name": "EUR-USD",
        "long_name": "EURO / U.S. DOLLAR",
        "variation": "Sentiment Score for 2024/02/12: 29 | Sentiment Score for 2024/02/11: -20",
        "summary": "The sentiment score for this stock has experienced an extreme increase towards positivity.",
        "score": "29",
        "p_change": true,
        "colour": "#10B982"
      },
      {
        "short_name": "GBP-USD",
        "long_name": "BRITISH POUND / U.S. DOLLAR",
        "variation": "Sentiment Score for 2024/02/12: 30 | Sentiment Score for 2024/02/11: -15",
        "summary": "The sentiment score for this stock has experienced an extreme increase towards positivity.",
        "score": "30",
        "p_change": false,
        "colour": "#10B982"
      },
      {
        "short_name": "XAG-USD",
        "long_name": "SILVER / U.S. DOLLAR",
        "variation": "Sentiment Score for 2024/02/12: 37 | Sentiment Score for 2024/02/11: -20",
        "summary": "The sentiment score for this stock has experienced an extreme increase towards positivity.",
        "score": "37",
        "p_change": true,
        "colour": "#10B982"
      }
    ],
    "significant_sentiment_heading": "Significant Sentiments",
    "significant_sentiment_description": "This is when the overall sentiment of a company or currency pair changes from negative, neutral or positive to very negative or very positive, i.e. when the company's sentiment score falls below -60 points or rises above 60 points, respectively.",
    "extreme_score_change_heading": "Extreme Sentiment Score Changes",
    "extreme_score_change_description": "This is when the sentiment score for a company changes by or by more than 30 points. This change may result in a change in the overall sentiment of a company or currency pair.",
    "disclaimer": ""
  }
}
const payload: NewsSentimentInterface = MockNewsSentiment as NewsSentimentInterface

describe('MaizzleService', () => {
  let maizzleService: MaizzleService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MaizzleService]
    });
    maizzleService = TestBed.inject(MaizzleService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(maizzleService).toBeTruthy();
  });
  describe('Get Email', () => {
    it('Should return an response from AWS Lamba', () => {
      let emailResponse: string | undefined
      maizzleService.getNewsSentiment(payload)?.subscribe({
        next: email => {
          emailResponse = email
        }
      })
      const req = httpTestingController.expectOne('https://ttzstpun7erhzafmahbcvd6iv40eorlm.lambda-url.eu-west-1.on.aws/lamda/build')
      const testHtml = `<!DOCTYPE html><html lang="en"><body><h1>Test Email</h1></body></html>`;
      expect(emailResponse).toEqual(testHtml)
    })
  })
});
