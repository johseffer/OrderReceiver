using RequestReceiver.Definitions.IoC;
using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RequestReceiver.Domain.Interfaces.Service
{
    public interface IOrderService : IAutoInject, IDisposable
    {
        IQueryable<Order> GetAll();
        void Add(Order obj);
        Order GetById(Guid id);
        void Update(Order obj);
        void Remove(Guid id);
    }
}
