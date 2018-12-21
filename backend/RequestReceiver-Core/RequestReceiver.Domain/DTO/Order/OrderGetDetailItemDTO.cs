using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RequestReceiver.Domain.DTO.Order
{
    public class OrderGetDetailItemDTO : EntityBase
    {
        public Guid OrderId { get; set; }
        public OrderGetDetailProductDTO Product { get; set; }
        public decimal UnitPrice { get; set; }
        public int Quantity { get; set; }
    }
}
