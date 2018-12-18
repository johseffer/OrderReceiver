using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RequestReceiver.Domain.Entities
{
    public class OrderItem : EntityBase
    {
        [ForeignKey("Order")]
        public Guid OrderId { get; set; }
        public virtual Order Order { get; set; }

        [ForeignKey("Product")]
        public Guid ProductId { get; set; }
        public virtual Product Product { get; set; }

        public decimal UnitPrice { get; set; }

        public int Quantity { get; set; }
    }
}
