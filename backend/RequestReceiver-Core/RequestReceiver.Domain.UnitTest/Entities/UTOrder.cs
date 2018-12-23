using NUnit.Framework;
using RequestReceiver.Domain.Entities;
using System;

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
            Assert.IsFalse(order.IsValid());

            order = new Order() { Number = "9999999", CustomerId = Guid.NewGuid(), CreationDate = DateTime.Now };
            Assert.IsTrue(order.IsValid());
        }
    }
}