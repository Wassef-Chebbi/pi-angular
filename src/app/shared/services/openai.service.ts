import { Injectable } from '@angular/core';
import OpenAI from 'openai';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  openai: OpenAI;



  constructor() {
    this.openai = new OpenAI({
      apiKey: '',
      dangerouslyAllowBrowser: true // This is the default and can be omitted
    });
  }

  generateText(prompt: string): Promise<string | null> {
    return this.openai.chat.completions.create({
      model: "gpt-3.5-turbo-0125",
      messages: [{ role: 'user', content: prompt }],
    }).then(response => {
      console.log(response.choices[0].message.content)
      return response.choices[0].message.content;
    }).catch(error => {
      return '';
    });
  }
}
