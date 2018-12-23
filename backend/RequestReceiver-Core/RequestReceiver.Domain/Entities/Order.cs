using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace RequestReceiver.Domain.Entities
{
    public class Order : EntityBase
    {
        public Order()
        {
            this.OrderItems = new List<OrderItem>();
        }

        public virtual IList<OrderItem> OrderItems { get; set; }

        public string Number { get; set; }

        [ForeignKey("Customer")]
        public Guid CustomerId { get; set; }
        public virtual Customer Customer { get; set; }

        public DateTime? CreationDate { get; set; }
    }
}
