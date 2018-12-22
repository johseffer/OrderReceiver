using RequestReceiver.Definitions.IoC;
using RequestReceiver.Domain.DTO.Order;
using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RequestReceiver.Domain.Interfaces.Service
{
    public interface IOrderService : IAutoInject, IDisposable
    {
        List<OrderGetDTO> GetOrderByNumberWith(string number);
        void Add(Order obj);
        OrderGetDetailDTO GetById(Guid id);
        void Update(Order obj);
        void Remove(Guid id);
    }
}
