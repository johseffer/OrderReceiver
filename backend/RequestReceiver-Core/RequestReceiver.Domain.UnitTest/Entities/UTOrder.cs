using NUnit.Framework;
using RequestReceiver.Domain.Entities;
using System;
using System.Linq;

namespace RequestReceiver.Domain.UnitTest
{
    public class UTOrder
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void UTOrder_IsValid()
        {
            Order order = new Order();
            Assert.IsTrue(order.IsValid().Count == 2);

            order = new Order() { Number = "9999999", CustomerId = Guid.NewGuid(), CreationDate = DateTime.Now };
            Assert.IsFalse(order.IsValid().Any());
        }
    }
}