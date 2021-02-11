#include <iostream>
using namespace std;

class member
{
private:
    int age;
    char *name;
public:
    member(int aage, char* aname) : age(aage)
    {
        int len = strlen(aname) + 1;
        name = new char(len);
        strcpy(name, aname);
    }
    member()
    {
        age = 0;
        name = NULL;
    }
    void setmember(int aage, char* aname)
    {
        name = aname;
        age = aage;
    }
    void show()
    {
        
    }
    ~member()
    {
        delete[] name;
    }
};

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    int aage;
    char aname[20];
    cin >> n;
    
    member m1[n];
    // member* m1 = new member[n];
    
    for(int i = 0; i<n; i++)
    {
        cin >> aage >> aname;
        m1[i].setmember(aage, aname);
    }
    
}
