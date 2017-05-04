using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Newtonsoft.Json;
using Simpler.io.Filters;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(Simpler.io.Startup))]

namespace Simpler.io
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            GlobalHost.DependencyResolver.Register(
                 typeof(JsonSerializer),
                 () => JsonSerializerFactory.Value);
        }

        private static readonly Lazy<JsonSerializer> JsonSerializerFactory = new Lazy<JsonSerializer>(GetJsonSerializer);
        private static JsonSerializer GetJsonSerializer()
        {
            return new JsonSerializer
            {
                ContractResolver = new FilteredCamelCasePropertyNamesContractResolver
                {
                    // 1) Register all types in specified assemblies:
                    AssembliesToInclude =
                 {
                     typeof (Startup).Assembly
                 },
                    // 2) Register individual types:
                    //TypesToInclude =
                    //                {
                    //                    typeof(Hubs.Message),
                    //                }
                }
            };
        }
    }
}
