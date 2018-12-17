using System;
using System.Collections.Generic;
using System.Text;

namespace RequestReceiver.Definitions.IoC
{
    public class TypeToRegister
    {
        public TypeToRegister(Type type, Type typeInterface)
        {
            this.Type = type;
            this.Interface = typeInterface;
        }

        public Type Type { get; set; }
        public Type Interface { get; set; }
    }
}
