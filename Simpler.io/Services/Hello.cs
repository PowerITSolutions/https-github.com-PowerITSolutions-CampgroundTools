using Microsoft.AspNet.SignalR;
using ServiceStack;
using Simpler.io.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Simpler.io.Services
{
    public class HelloService : Service
    {
        public object Any(Hello request)
        {
            HelloThing ht = new HelloThing() { Name = request.Name, Message = "Hello all!!" };
            IHubContext hubContext = GlobalHost.ConnectionManager.GetHubContext<ChatHub>();
            hubContext.Clients.All.broadcastMessage(ht);
            return ht;
        }
    }

    [Route("/hello")]
    [Route("/hello/{Name}")]
    public class Hello
    {
        public string Name { get; set; }
    }

    public class HelloThing
    {
        public string Name { get; set; }
        public string Message { get; set; }
    }
}