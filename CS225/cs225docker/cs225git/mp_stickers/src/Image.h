/**
 * @file Image.h
 * Contains your declaration of the interface for the Image class.
 */
#pragma once
#include "PNG.h"

class Image : public cs225::PNG {
    public:
        Image();
        Image(unsigned int width, unsigned int height);
        void Darken();
        void Darken(double amount); 
        void Desaturate();
        void Desaturate(double amount);
        void grayscale();
        void illinify();
        void lighten();
        void lighten(double amount);
        void rotateColor(double degrees); 
        void saturate();
        void saturate(double amount);
        

};


