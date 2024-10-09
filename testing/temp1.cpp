#include<iostream>
using namespace std;
class Hello{
    private:  //access specifier , private members cannot be accesed and viewed outside the class
    int a;// this is a data member of the class 
    int b;
    double c;
    protected: //members cannot be accessed from outside the class, however, they can be accessed in inherited classes.
    //function overloading
    public:  //access specifier, members can be accessed outside the class
    int display(int a){
        cout<<"This is inside hello class and display a function  :"<<a;
        return 0;
    }
    int display(int b, double c){
        cout<<"This is the same display function with b as parameter"<<b;
        return 0;
    }
};
int main(){
    cout<<"Hello world"<<endl;
    Hello obj;  //an object is an instance of a class, when a class is defined, no memory is allocated but when it is initialised
    //i.e. an object is created , only then is memory allocated

    
    obj.display(2);
    return 0;
    
}

