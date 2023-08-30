/*
CS 225 mp_stickers Image.cpp code by Jiwoong Jung (JJ)
Image.cpp file will be the implementation of the interface 
described in Image.h file. 
*/
#include "Image.h" // include the headerfile (interface)
#include <cmath> 

void cs225::Image::darken() {
    unsigned int width = this -> width(); // or width_ = width()
    unsigned int height = this -> height();
    /*
    iterate through every pixel -> any function?    
    then use the reference to  function to decrement the darkness
    HSLAPixel ^
    */
   for (unsigned int i = 0; i < width; i++) {
    for (unsigned int j = 0; j < height; j++) {
        HSLAPixel & sample = this -> getPixel(i,j);
        if (sample.l < 0.1) {
            sample.l = 0.0; 
        } else {
            sample.l = sample.l - 0.1; 
        }
    }
   }
}
// two ways to implement the function!
void cs225::Image::darken(double amount) {
    unsigned int width_ = width();
    unsigned int height_ = height();

    for (unsigned int i = 0; i < width_; i++) {
        for (unsigned int j = 0; j < height_; j++) {
            HSLAPixel & sample = getPixel(i,j);
            if (sample.l < amount) {
                sample.l = 0.0; 
            } else {
                sample.l = sample.l - amount; 
            }
        }
    }
}

void cs225::Image::desaturate() {
    unsigned int width = this -> width();
    unsigned int height = this -> height();
    
    for (unsigned int i = 0; i < width; i++) {
        for (unsigned int j = 0; j < height; j++) {
            HSLAPixel & sample = this -> getPixel(i,j); 
            if (sample.s < 0.1) {
                sample.s = 0.0; 
            } else {
                sample.s = sample.s - 0.1; 
            }
        }
    }
}

void cs225::Image::desaturate(double amount) {
    unsigned int width_ = width();
    unsigned int height_ = height();
    for (unsigned int i = 0; i < width_; i++) {
        for (unsigned int j = 0; j < height_; j++) {
            HSLAPixel & sample = getPixel(i,j);
            if (sample.s < amount) {
                sample.s = 0.0;
            } else {
                sample.s = sample.s - 0.1; 
            }
        }
    }
}

void cs225::Image::grayscale() {
    unsigned int width = this -> width(); // x-coordinate
    unsigned int height = this -> height(); // y-coordinate 
    for (unsigned int i = 0; i < width; i++) {
        for (unsigned int j = 0; j < height; j++) {
            HSLAPixel & sample = this -> getPixel(i,j);
            sample.s = 0.0; 
        }
    }
}

void cs225::Image::illinify() {
    /*
“Illini Orange” has a hue of 11
“Illini Blue” has a hue of 216
    */
   unsigned int height = this -> height();
   unsigned int width = this -> width();
   for (unsigned int i = 0; i < width; i++) {
    for (unsigned int j = 0; j < height; j++) {
        /*
        color 
        */
       HSLAPixel & sample = this -> getPixel(i,j); 
       double orange_diff = std::abs(sample.h - 11);
       double blue_diff = std::abs(sample.h - 216);

       if (orange_diff >= blue_diff && orange_diff != 360) {
            sample.h = 216; 
       } else if (blue_diff >= orange_diff && blue_diff != 360) {
            sample.h = 11; 
       }
    }
   }
}

void cs225::Image::lighten() {
    unsigned int height = this -> height();
    unsigned int width = this -> width(); 
    for (unsigned int i = 0; i < width; i++) {
        for (unsigned int j = 0; j < height; j++) {
            HSLAPixel & sample = this -> getPixel(i,j); 
            if (sample.l + 0.1 > 1.0) {
                sample.l = 1; 
            } else {
                sample.l = sample.l + 0.1; 
            }
        }
    }
}

void cs225::Image::lighten(double amount) {
    unsigned int height_ = height();
    unsigned int width_ = width();
    for (int i = 0; i < width_; i++) {
        for (int j = 0; j < height_; j++) {
            HSLAPixel & sample = getPixel(i,j);
            if (sample.l + amount > 1) {
                sample.l = 1.0; 
            } else {
                sample.l = sample.l + amount; 
            }
        }
    }

}

void cs225::Image::rotateColor(double degrees) {
    unsigned int width_ = width();
    unsigned int height_ = height(); 
    
    for (unsigned int i = 0; i < width_; i++) {
        for (unsigned int j = 0; j < height_; j++) {
            HSLAPixel & sample = this -> getPixel(i,j); 
            double hue_difference = sample.h + degrees; 
            if (hue_difference > 360) {
                hue_difference = hue_difference - 360; 
                sample.h = hue_difference; 
            } else {
                sample.h = hue_difference; 
            }

        }
    }
}
