using ServiceStack;
using ServiceStack.Host.Handlers;
using ServiceStack.Text;
using Simpler.io.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace Simpler.io
{
    public class Global : System.Web.HttpApplication
    {

        public class AppHost : AppHostBase
        {
            //Tell ServiceStack the name of your application and where to find your services
            public AppHost() : base("Hello Web Services", typeof(HelloService).Assembly) { }

            public override void Configure(Funq.Container container)
            {
                JsConfig.EmitCamelCaseNames = true;
                JsConfig.DateHandler = DateHandler.ISO8601;

                Plugins.Add(new CorsFeature(allowedOrigins: "*",
                                            allowedMethods: "GET, POST, PUT, DELETE, OPTIONS",
                                            allowedHeaders: "Content-Type, authToken, accept, authorization",
                                                allowCredentials: false));

                var emitGlobalHeadersHandler = new CustomActionHandler((httpReq, httpRes) => httpRes.EndRequest());
                RawHttpHandlers.Add(httpReq => httpReq.HttpMethod == HttpMethods.Options ? emitGlobalHeadersHandler : null);
                PreRequestFilters.Add((req, res) => req.UseBufferedStream = true);
            }
        }

        protected void Application_Start(object sender, EventArgs e)
        {
            new AppHost().Init();
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}