﻿using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace Simpler.io.Filters
{
    public class FilteredCamelCasePropertyNamesContractResolver : DefaultContractResolver
    {
        public FilteredCamelCasePropertyNamesContractResolver()
        {
            AssembliesToInclude = new HashSet<Assembly>();
            TypesToInclude = new HashSet<Type>();
        }
        // Identifies assemblies to include in camel-casing
        public HashSet<Assembly> AssembliesToInclude { get; set; }
        // Identifies types to include in camel-casing
        public HashSet<Type> TypesToInclude { get; set; }
        protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)
        {
            var jsonProperty = base.CreateProperty(member, memberSerialization);
            Type declaringType = member.DeclaringType;
            if (
                TypesToInclude.Contains(declaringType)
                || AssembliesToInclude.Contains(declaringType.Assembly))
            {
                jsonProperty.PropertyName = jsonProperty.PropertyName.ToCamelCase();
            }
            return jsonProperty;
        }
    }
}