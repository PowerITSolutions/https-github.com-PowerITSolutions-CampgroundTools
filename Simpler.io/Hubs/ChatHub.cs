using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Simpler.io.Services;

namespace Simpler.io.Hubs
{
    public class ChatHub : Hub
    {
        public void Send(HelloThing req)
        {
            Clients.All.broadcastMessage(req);
        }
    }
}