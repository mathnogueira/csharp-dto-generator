using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Siout.Models
{
	public class MGeometry
    {
        public MGeometry() 
        {
            this.coordinates = new List<double[]>();
        }
		// Attributes
        public string type { get; set; }
        public List<double[]> coordinates { get; set; }
		// EndAttributes
    }
}