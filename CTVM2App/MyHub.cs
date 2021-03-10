using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CTVM2App
{
   // [HubName("chat")] //case sensitive - as it is
    public class ChatHub : Hub //camel case in SignalR
    {
        public void Announce(string message)
        {

            Clients.All.Announce(message);

        }
        public DateTime GetServerDateTime()
        {
            return DateTime.Now;
        }
    }
}