#include <iostream>

using namespace std;

int myqueue[10001];
int front, rear = 0;
int size;

int main(void)
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    int num;
    string command;
    
    cin >> n;
    
    for(int i = 0; i<n; i++)
    {
        cin >> command;
        
        if(command == "push")
        {
            cin >> num;
            myqueue[rear] = num;
            rear++;
            size = rear-front;
        }
        else if(command == "pop")
        {
            if(size == 0)
                cout << -1 << '\n';
            else
            {
                cout << myqueue[front] << '\n';
                front++;
                size = rear-front;
            }
        }
        else if(command == "size")
        {
            cout << size << '\n';
        }
        else if(command == "empty")
        {
            if(size == 0)
            {
                cout << 1 << '\n';
            }
            else
                cout << 0 << '\n';
        }
        else if(command == "front")
        {
            if(size == 0)
            {
                cout << -1 << '\n';
            }
            else
                cout << myqueue[front] << '\n';
        }
        else if(command == "back")
        {
            if(size == 0)
            {
                cout << -1 << '\n';
            }
            else
                cout << myqueue[rear-1] << '\n';
        }
    }
    return 0;
}
