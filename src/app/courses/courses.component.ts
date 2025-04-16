import { Component } from '@angular/core';

import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  
    categories = [
      {
        name: 'Deep Learning',
        learners: '2M+ learners',
        courses: [
          {
            name: 'Deep Learning A-Z 2025: Neural Networks, AI & ChatGPT Prize',
            price: '£449.99',
            image: 'https://tse2.mm.bing.net/th?id=OIP.l3ehPyHJOAEzxXbNjJAUZgHaEX&pid=Api&P=0&h=220',
            description: 'Neural Networks, AI & ChatGPT — all in one practical course!',
            rating: 4.5,
            tag: 'Bestseller',
            sections: [
              {
                title: 'Introduction to Deep Learning',
                videos: [
                  { name: 'What is Deep Learning?', time: '5:12' },
                  { name: 'Neural Networks Basics', time: '8:45' }
                ]
              },
              {
                title: 'Building Neural Networks',
                videos: [
                  { name: 'Activation Functions', time: '6:34' },
                  { name: 'Backpropagation Explained', time: '10:22' }
                ]
              }
            ]
          },
          {
            name: 'Python for Deep Learning: Build Neural Networks in Python',
            price: '£249.99',
            image: 'https://cienciadedadosbrasil.com.br/wp-content/uploads/2023/08/PYTHON-1024x576.png',
            description: 'Learn deep learning from scratch using Python.',
            rating: 4.5,
            sections: [
              {
                title: 'Python Basics',
                videos: [
                  { name: 'Installing Python', time: '3:20' },
                  { name: 'Data Types and Variables', time: '7:10' }
                ]
              },
              {
                title: 'Deep Learning Models',
                videos: [
                  { name: 'Understanding Layers', time: '5:45' },
                  { name: 'Creating Models with Keras', time: '9:30' }
                ]
              }
            ]
          }
        ]
      },
  
      {
        name: 'Machine Learning',
        learners: '8M+ learners',
        courses: [
          {
            name: 'Complete Machine Learning Bootcamp',
            price: '£299.99',
            image: 'https://miro.medium.com/v2/resize:fit:1200/1*ikEB53J-pPJCXy1Ub1XUsQ.jpeg',
            description: 'A full bootcamp to become a Machine Learning engineer.',
            rating: 4.7,
            sections: [
              {
                title: 'ML Basics',
                videos: [
                  { name: 'What is Machine Learning?', time: '6:12' },
                  { name: 'Types of Machine Learning', time: '10:50' }
                ]
              },
              {
                title: 'ML Algorithms',
                videos: [
                  { name: 'Linear Regression', time: '12:30' },
                  { name: 'Decision Trees', time: '11:10' }
                ]
              }
            ]
          }
        ]
      }
    ];

    selectedCategory = this.categories[0];
    // In your component.ts file
    getStarRating(rating: number): { stars: string, display: string } {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      
      let stars = '';
      stars += '★'.repeat(fullStars);
      stars += '☆'.repeat(emptyStars);
      
      const display = `${rating} ${stars}`;
      
      return { stars, display };
}

}