import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Droplets, Sparkles, Clock, Leaf, AlertTriangle, CheckCircle, Star, ArrowRight } from "lucide-react"

export default function TipsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Expert Advice</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Cleaning Tips & Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional cleaning tips and maintenance advice from our experts to help you keep your spaces spotless
            between our visits. Learn the secrets of effective cleaning and maintenance.
          </p>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Daily Cleaning Habits</h2>
            <p className="text-xl text-gray-600">Simple habits that make a big difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Make Your Bed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Start each day by making your bed. It instantly makes your bedroom look tidier and sets a productive
                  tone for the day.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Wipe Surfaces</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Clean kitchen counters and bathroom surfaces after each use. This prevents buildup and keeps germs at
                  bay.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Tidy As You Go</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Put items back in their place immediately after use. This prevents clutter from accumulating
                  throughout the day.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Quick Vacuum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Spend 5 minutes daily vacuuming high-traffic areas. This prevents dirt from being tracked throughout
                  your home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room-by-Room Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Room-by-Room Cleaning Guide</h2>
            <p className="text-xl text-gray-600">Professional techniques for every space in your home</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kitchen */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Kitchen Deep Clean</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Wipe down counters and stovetop
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Load/unload dishwasher
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sweep floor and spot clean spills
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Deep clean appliances inside and out
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scrub sink and faucet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Mop floor thoroughly
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> Clean your microwave by heating a bowl of water with lemon slices for 2
                    minutes, then wipe clean.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bathroom */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Bathroom Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Wipe down sink and mirror
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Squeegee shower walls after use
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Hang towels to dry properly
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Scrub toilet inside and out
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Deep clean shower/bathtub
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Mop floor with disinfectant
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm text-purple-800">
                    <strong>Pro Tip:</strong> Use white vinegar to remove soap scum and water spots from glass shower
                    doors.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Living Room */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">Living Room Care</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fluff cushions and fold throws
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Put away items and clear surfaces
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Quick vacuum of high-traffic areas
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dust all surfaces and electronics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Vacuum upholstery and under cushions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Clean windows and mirrors
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Pro Tip:</strong> Use microfiber cloths for dusting - they trap dust better than regular
                    cloths.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bedroom */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">Bedroom Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Daily Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Make bed and arrange pillows
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Put clothes in hamper or closet
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Clear nightstands of clutter
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Tasks:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Change bed linens
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Dust furniture and lamp shades
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Vacuum floor and under bed
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-800">
                    <strong>Pro Tip:</strong> Wash pillows every 3-6 months and replace them every 1-2 years for better
                    sleep hygiene.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Eco-Friendly Cleaning Solutions</h2>
            <p className="text-xl text-gray-600">
              Natural alternatives that are safe for your family and the environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">All-Purpose Cleaner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Mix equal parts white vinegar and water in a spray bottle. Add a few drops of essential oil for
                  fragrance.
                </p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>Best for:</strong> Counters, glass, mirrors, and most surfaces
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Bathroom Scrub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Make a paste with baking soda and water. For tough stains, add a splash of white vinegar.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Best for:</strong> Tubs, tiles, grout, and stubborn soap scum
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Floor Cleaner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Mix 1/2 cup white vinegar with 1 gallon of warm water. Add a few drops of dish soap for extra cleaning
                  power.
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Best for:</strong> Hardwood, tile, and laminate floors
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Cleaning Mistakes to Avoid</h2>
            <p className="text-xl text-gray-600">Learn from these frequent errors to clean more effectively</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <CardTitle className="text-lg text-red-600">Using Too Much Product</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  More cleaning product doesn't mean better results. Excess product can leave residue and attract more
                  dirt.
                </p>
                <p className="text-sm text-green-600 font-medium">
                  <strong>Solution:</strong> Follow product instructions and use the recommended amount.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <CardTitle className="text-lg text-red-600">Cleaning Windows in Direct Sunlight</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Cleaning windows in bright sunlight causes the cleaner to dry too quickly, leaving streaks.
                </p>
                <p className="text-sm text-green-600 font-medium">
                  <strong>Solution:</strong> Clean windows on cloudy days or when they're in shade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <CardTitle className="text-lg text-red-600">Not Letting Cleaners Work</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Wiping cleaners away immediately doesn't give them time to break down dirt and grime effectively.
                </p>
                <p className="text-sm text-green-600 font-medium">
                  <strong>Solution:</strong> Let cleaners sit for the recommended time before wiping.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500 shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                  <CardTitle className="text-lg text-red-600">Using Dirty Cleaning Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Dirty sponges, mops, and cloths spread germs and dirt rather than removing them.
                </p>
                <p className="text-sm text-green-600 font-medium">
                  <strong>Solution:</strong> Clean tools regularly and replace them when worn out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Professional Help?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            While these tips help maintain your space, sometimes you need professional deep cleaning. Let SparkleWorksHome
            handle the heavy lifting!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
              <Link href="/contact">Schedule Professional Cleaning</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Link href="/services">
                View Our Services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
