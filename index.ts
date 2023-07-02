import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneIcon from "@mui/icons-material/Done";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HailIcon from "@mui/icons-material/Hail";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const DesignXdToCode = () => {
  return (
    <div className="px-10 pb-10 bg-[#000A1F] text-white">
      <div>
        <div className="pt-5 flex flex-row justify-between">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAMAAABThUXgAAAAllBMVEX///9jY2JkZGP+/v4BKVhnZ2ZqammxsbH19fUAKVoDKlh3d3bf39/4+PjKysnBwcHv7+/q6uqsq6vT09N1dXSoqKiioaEuT3a8vLzJyMhvb24AKl2fnp40VHu6ubnb29ugr8GTk5OFhYSBlKtCYIK1wc6UpLiBgYAKMF+Pj4/Ezdded5WtushNaovY3uVqgZ17j6gkRm9PbjVoAAAVPElEQVR4nO1di5ajuNGW0QhomzuGMR4H1t7suL35/yT7/i+XKt3BgIXt3s3JoebSNpdS6VOp9KkkaEJWWWWVVVZZZZVVVllllVVWWWWVVVZZZZVVVnlRqKs4K3mq5Nfto3f3uBrywMrn7pq8jc58m9bnctOSKusr1T3vQKunI26L4LGkZRSSGZQ7S0nuZiQlWavvKbrRm7C8OCpTBwuDICIGozKoqzR7A1qU/PbTfC6PvoOw4+5SJyEZbS1K8r3RcjzHLkZSGp+tm3bR/U1wgJbVZXdkLiYed7KVwJwb291u/q592bmgRf/24zepBRTvGPPYI/E8uMbfV/mYd1GSmAuZt3NyLUqivV1uOrwJyonT61GW7SB+wlWA4uMtR5dsvdOTEUdLTH5+fPzduGzgs42DeCjsWOf3rYVgefoy5gzWztvo2/whWNiXrozxcl3s2zDGwaIk3J3jsj1AP+jY4TXXQsf62H7+n+1anrF6Bi0OmH883PUyBGsjVMD/i8BSqu/AgjrXCNXGwTIJli/Bao9xcrxesFu2e8cAOmnkLz+22x//rxxUuJYnPGdMhLWe9C7m+eehARosfvUSsESxI2BBG158dc5FNFiEXGvSHMEn9i3N1bFnJfz+sd32XUsaNe9XEjOP+ddu6AXaszZLwRr3LEq6PWMbu6Eeur0CKz42JDmmZcFKQi/FK2Bxx/r2DVwr1mgV7CFWyiJoZggOx3LgBs+DpZqgBxbGaNEHXfuhBVYIP5MjSANfb9VLnhWDYwFY2w8zIGZ7TwSkx1htRKRnZd8P3gsWUhHGXJ1K2GTAovsWwAo7/BruXonwFIbC7TflWupY4XvTLeiJ1lV/hG1+13OEt4IFsf3C5CCoyvMeuJhnBfjThaQspAHYWB5H6JszVlQ41r1rbR4P0MbgAT94O1i1r63xZppxYJ4CK2JJfglJeA7o9fQCz0KO9U3I9sffjd0wIHoTw859NEPrmX+Lrdq9EyzQ5m2MN+v22cwP2Z4hpQFLsddQGFBfYA6CYym0tpZr8XF6ir0zSQo8Cy+PBV8DFhojB0JFVwQffsDj4awIDeBLwfESNOlpd32FZaFjbTVYNo3PzvvdtBxhEqeZtCfp6dGauL4VrINvBXeOEzse58wTAnFdagDVJ/h+belL0d1yLIjymmvhjziclrw7nPdyEFCgMP/0FZ4FNl6Zp4raIFHxz2mUZzPmCYn7+vn3FznWpwTrgw+IJvPzUG1UM2axC6iF12lneCdYep4pAGOX0rl65iPW58U5dPj9w2DVc63HCUmY1+6ZCly8I/onbeU7A/zJ150Qu+AtdM2VDvS/BpUk77IPfuvReIe7gSpeOVXkSHFmkxtveBtY4dEeSBhwgPiBpq+R+LuJWB99ruUiIkGhYjyCFbwdLEpKmzR4/guk8hUR5F06FaK1tWm8m4aI2SMiu3wBWC3TmmAQeWke/LxY5N2E+GWuJYZ1NblF9pDLGr4RrIrpbv7XOZZF3nU/tGm8i8hZm04HHJP3g3VmnqLsnn95x5rDculzLC2GxjtqOeiOiLi07wfrZrohY6d3Lf4tkx55t1zL0HgXsWrIg1b9frAukp/wNGP93+RYA67loAb7oZkfnr8IrI1MuvxVYBny3nMum8Y76dExBXG5Car85phlwHJbgny7hN/vHeuexj8USmpmashu5O1gnUSyiP9lL6UNnhWbvANIIM/R+D8BrMJXMQvJSflXeJZN3r+9QONNN+H50i/ohinTGUeI8Oc/fzS0yPv2G+bgtxqtZTQesPnqAB8xOfkUyl5c91suQ/K+/ZButl1K4+X0UFEHv6ZvBgv6wJVZqxPe/s/m8APyvv3xt39IR1tK4ylpGJN9cKNTy+/NZ1VmqQlTNLtyJn30NCQzZvU41nb7+Tv5wx4bnWk8mHfydcyCGjZfAFan1r0kXscinLXovYgZ8s7d6fPHP4geHJfReEpKpibSfG4YvR0sMPdmlAnn2tdJNCJ5lvFg+068ho71DRyrT7tcudaAvwMNen9amStjavop1798Nrr+dbyeiySP3wnXgLxvwbHoTDZ+RpFY/ZSLYvDTr1TXeStY8dm3Zuti6864MN9nu3MbkZeWJnpivAipwwc4FrW8zZnGw/lCD1Ri4aX7ArAwah3Nstuc4CIZut3+jIuq74CrT96FYw3j2EMaz/08rpkVejklVUW8efleb0bUecBJvDZi9fXavgeuHnn/hkMh7QWyMRo/MkTT7mqwwj9ME8b376I5i4Ss5HMqdA1W7Ddq7whfh70mr6M1yLxLx+pxLwcaH+fJiam1T9ne7GK24bwbrPDiswd9UMKn7WGsDl9Ea0Det9vt7zLOWCfuaHxY1H05X5mvMjN662JJvqYbcr+/arTmu6E1qz++moQekHfOsZRBPydo/NjeeOb1bPd6ibnnN+BOgEXUVhUJyNx2KE0wwKTLS+mvMfKu1Q2C2ba/N74vG10rmTth1+wLwUICUYvtO9qbhxuhVPJZ/YdonV8Ba4S8U1PFKRov9mttjFmmCc0kxMo0fQFY+CXd+549qR53K2t8BrSC59EaI++Wsikar/bGD5zd2tjWfyDiK8DCb3m998XjHcqAEc8yFnqDNlwM1j15Hz/bp/H9vfF2XNhIfw/6ihIronljj+HMguWNgcXhioqL509MdvRUQgd6HBJvz4etEfJuGzNF40f2xkvkRLwarKr3Pctz2/T6yLMIn1+RrAzOV39i058vU9DGt9iYHicZJ+9Gpmn8YG98P4zyNNYIWLK7qu2KD40rj0r9BFgCLhJnedSVI9IEpx1/uscMP3zbzXMySt5te6do/HBvvAGNef6+Gcy6OVgmtrmlgnm23YToKY94kFCIk4veJyi6wpOJ6CnybhU1SeP7e+OFUzH+5A67e3SH8P3FJsC7DUlYgpkBbuYespnfv9YqBxWer7fYLZJJ8j5+yceIa5ktyhwE/uTlyBQMs5sblbgRS6OPrSPxzWemKZ4dxqjIf8nBEbUdsyfUTJN32+RpGh/4qo+IYfl6O1dpREcfzsx1N0RU9w7TDv5sptUNn38UIiat2hssesAT/XCWvFtFTdL4bM8sJgO1ifn+31FD4qOe0yJaDl4CIct+KNRzAXhCE41vevvmprdB31nmyLtt8yMar2rDGjK9oEIv1oMFOoM6X8cTT8NIl2DXV6i3WBmQhIudFqt6QN6NuNB4MSbHkwMTzzcLa3k/3D0cvkG7b/LTm2dqaFfV2qekN28u0jBH3sevm6LxMsBP0z2x6G7GTtY8sheV2/yItS+AhW1l5tzPOOksebetdqTxnO5NWAGXaiLt1LiUhHtrkg4fXll4lnloldDZLU0CPiLvRtxoPGfmM/4i1sg8NSI9ejQZn9zSXRAb4vpK1s4k7b2nwHpE3u2SHGi8p1zrobkbeeks8wZPPHoWNfJe28KNS/5mZEXgFyl7TN6NuNJ49fTjeHmRz0ztwQvnYhDFLWv2sxrstV5I47NvjUQLY5YDeR+/eIrGS/ZwnaLmahOE8izwlWmuRXknVMkZ/lilC+efri3J94aVqn1QzuJC3u3CnGg8Osxk1BIPcym2jyYfuwkCCwdblSoQf9hru7AoUHgVAzxHlmffbYWhj0nybsSFxos4PMW1wLVu9g75DX81zNjUiOLCtk6rcK2vZOxMaJUrY3MUZ0zcyLtdnDONnwxFQKN9HTakcwXxEC78lp+1X72WVVEF07O1W8U8q+Z6uyN5N+KWjcfgOcO1Ttazrjyt6l9K2k+wEJKlR7XarJLK9+zd8QFDoTLG2cNGcxwYiN2h4jHox6ce3+aHQnWHA40XTjD5UgkRZo3ZnJl556aXMIlaezlQgMp2wzn0otqWN7bRgxC20KLXXoBj/WGTdwfHcqPxgptPZgdkjPdMI+M4x66ntozyMMyjJLjtfKYflNJp6mEnhI718IFo8eh2HqXno8900hv1HRf2wp+O5N2IYzZ+fkFAckOzgIBIoByPR3yCX7w3zExxRJC546Mw0Xz8qD1/3J6r3Fh9EJz5uJDehn+IN6ioAPRPh31qjjQeaj8Xtfg2NA2WCvd825m13mdmRZxi3eWo893Uak7vPQ5Gp47t8GXZC7PuHOtfLne70HhRz1nXyvjuF9t3DP8x8Cm34tsThtjjZGBqnXCwyCqVWFoXZi9UxPpQnMnFsRyz8Z4aEKcLz69+HyKvB5pkFoo6sJGnL/F1UHMbQfpi5YV4nz4vmhfGko5LtD7BsZzEicaLjjhD+jhaNumxKmS4gk6mjD2p6giWImq9A2xpJ8y+L+RYSh7TeOFeOEOcQSu7zb1fynQY+OOfR+KfBMvduaRaPlY7Le+aGmPEwjp/SPLuFLGEkQ40XrjWbEaBhCe9mcsKVRZUkjF4rBrrMwosZ5QUWNCgy2YCFsf6WOhYj2m8CvEzAyK/mhz2vv0mlr5TbWT/8XfNKP1cCpYSmIwuXHqU5P1Djmo4FLo/8fWQxusV8lmSjC8ZOjOmhgQVXZQXiHGCsdNEeNFgPR4SJXEQ//zrwpyYTd4lx3JXcD+lHHuX6QMaL6+nydXiEAP/4oyhnBq2nvEsJL/10oVHybHwgcItZ0vOEQsFB9LPLb8Z7/7s03hrRZQ9mn/ByTC98m17PZIqKAhjlySczINwsBbgJOYJ12T5u7KyP7af208lH0scS7jWj09L7F2m+9470K4PmpE/35qc+cY9T71STXzwd7XIRUxaEfkub3u2dB6vh3Dh9Bsv//3jhyWfvyztxb/9Yd//41czICb73u7lx3wGz2dNfbnumXzpNvP311sx9epvc194dnqRuH6beMXBX1JRWdIv//7VyO+Lbyf//Glu//evmbVbN7LevF6kLraJBzPyLpGvc0+TLtfH54zInV7/rt5Tf5dhfFIW67hLwj2vStx//wowl1n94lIW3mEZ88pTsTSeUvCk5rHtZ0vveZQrXWWVVVZZZZVVVvnvlq/iK/+DROgvqhF9X9nLpyvPslpK4sjtpoW6YV6cz+/gedMrGZaKnoIW0d3ruM2MGFMIJaG9Q/Dv0JJRJCjp1KutsOZtgQkH+1Zxsl8MxUuyA6af4yCZ9B/Qd6iqQL0adqjCMjjRl+C/OI2GFSBxttRLw64rqybqMjVjFT+0t2El4F97sA/xD1EVjj8UAJYW2mNJUuWx0CJ196Zo8oRUlAeY9SoDTCFO+HsctHneqqL7ltoGpwd7wkhi/KV1lhX4uavC5b0qrnIF97Ct5DEoO9Uf1TW5SucNywKAAvO5SYm+9e5qdVSVF6J6VDwwxFxf1rhEUCUDbbabcqVxbyWBwnTftoL/zIu+ZQ5CaVZFIvuUYpYtCYKSkKgrgwDX1PIWDkOXgyqHB2hVfmXRdRHJy5iEKV59VyMAKyyjFBWWFf7WQK6FkDJK2oyrzkBJKUptEfQuCBroYglUsWyhG/L7i/R+UahNubsmwmBwwTJqhFmlMAVNigjpOlABxZZxWmDnLsEhshYLI12U4K9UjIL6EOHlrfs6K6gHsEhel3lw4L0mqktSntI8OeUkOzVZEHCw4rbNmgoqXiX5oU4Ahpgcgrw76V8fIB2ag5VVRZcHDVapDEFLXoC3tae2pEnd5G3d5iWoz09JFhSA1YlfnNcZqO0icJwQ2iqvmoFqQjnE6Dd5VebVAawCw9s2hvuiroKTYBJqblswIYi6ukhQcwynwqrJ2gp6CRR6qEL4l+QE2g0r5YiWBAv6Gdia07ojpKnA26E1oJ+nUMUQjgFYHT+U8kMZ2NwVNKzhzla9bC3TcRc9C/2zLGLeDdMWtUSkLdB1wV4oiatP+ImMoC91dZyD2QAUlE6xdliE6CVZIOtDK9U0gAYAllNAAn5mtMbyahKBNnJoMGZlcC2/rAwoLywQ96ctKITQExUi8JLAeU+pAAuU0Rj6Y4aIhBEoprwAPjCBPQBW00IDQ+0CBAeq1BUxjRA3FT/QAA1Whr/WEC7hkbaQWri2BmxFVDDmYniCRggRuxh6dh3ifRT+4y0owQLVJwlWXItRjVL0IlKVaCSqw8Kh0LAs8O1VuQALcGsR+4AXBj04pEWDUILVObeuKeR4tASsMCjatq3zqOIjEYLFm56bBEMhgHVIeWAQNS44WBAKDu0p4Xfk8Kltc3k3R06DpbRwnBVYvJpZcyg4QrybAVh4BjpNF1fA4jhY0PyH4NQKt9WeFfNAWyQKrBxdJK5zbjic52Dl3O/RnBi6AsSotj3xhpeeFaPPYzELwYL+G+U57abBaiVYhQGLQqjPeTeE+jfp6ZAasGoHsGhUpRG6hVxslmBRARZRYOXN4ZSmfKspj1kAX0lnwCJjYEEvAdKR5+E9WOVCsFAZjIFgK3CPrNNgiQ6Uqm4IQYbyGgcIFtRVBAhRVKgpyNCzeFTGbjj0rOCAdmcc2bCjqhuGd91Qrx5jk8F4cyDcxaxuiFdkVYjxg+TRKFgNVjHvgdUET3RDNALGpjxGW9NCg4XRnKoAH/Oy8VCOAT6gXaHHJ9RzyKyYxcECeokjB3L9uO76MUu2BeeGOBp0NeUBHolLHYdFZAf4VqlG1wddJbYgFiLAKjKCI1NXoTZCIVBpsGTMAh7UYF3gchOziFDXLgnwOKZFMHhDRyGHIu/ge4Jmgt3AE4CdxDioxNUh42yiSrsDnCorCMRJ3tSHwTo4byrsWZxdpHzUSoDyUOFZKXzIIWDjeJdClAygmmUdRYAkpw6nKK8bYVR5v8WIFkEeoUVRVQKp4UbywTUBFUBo4gCsBDVgMB4lSN/AHCwsw7pAvVox8IMRJQT8NksKZ6IFYDU5j3IFvjQQOBw0AolwJwAeB54EDkPKEjldwX9NNdQ7B1eIGuSSRRJpUqdpdAc8CWNMjpeg43VtgVoS7DpdCZ6CdBPUh6gyBZ6ZFEUjD4uPaBS/f8jUw7RAXZRC2QehBYYJ/FBABKPSSjQ4RB6c8MqIy6K2QFJawqGwybCkDi/n75Z0FvEe7TgTnzIxMyNyckszIr7jKfw/Qt2VnHiHGFbvZ4fUTJapmrSaaSAxH7A0vscpDMVUipqPE7N0fT5WlhFzHzeYysN2af26qKm0tGDJ5FBZoRWbQ4Qak+Xprii5Nw/O3ilTGsjYdX2Vdsk9I0Z0G6z719GRCgwKtK1QgE1cPi1qSkF6P5Ud1nfxsSwKTqhnyro7OpzaG1stf9Mlmo+j5vYMHd5nFTXi8YO6jVj2FfL1JfxvyLpdYJVVVllllVVWWWWVVVZZZZVVVllllVVWWWWVVcblP0KyldM0kQzhAAAAAElFTkSuQmCC"
            alt="logo"
            className="h-10 w-20"
          />
          <div className="flex flex-row gap-5">
            <div>Home</div>
            <div>Clients</div>
            <div>Services</div>
            <div>Projects</div>
            <div>About</div>
            <div>Contact</div>
          </div>
          <MenuIcon />
        </div>
        <div className="relative pb-44">
          <div className="pt-20 text-[40px] w-[40%] font-bold">
            We Provide Smart Bussiness Solutions
          </div>
          <div>Grow your Business With Us Best Business Solutions</div>
          <div
            className="h-[300px] w-[300px]  absolute right-8 top-28"
            style={{ height: "300px", width: "300px" }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style={{ height: "250px", width: "350px" }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 pb-10 gap-8 ">
          <div className="w-[46%] text-[30px] font-bold">
            We’ve More Then 254+ Global Partners
          </div>
          <div className="w-[70%] ">
            Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo
            inventore veritatis quasi architecto beatae vitae
          </div>
        </div>
        <div className=" border-t-2 border-black flex flex-row justify-center gap-8 pt-10 items-center w-full ">
          <div className="border rounded-full items-center  pl-2 py-1">
            <ArrowBackIosIcon />
          </div>
          <div>
            <img
              src="data:image/png;base64,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"
              alt=""
              className="h-10 w-20"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtlFoYajHq1AuRRChUQ4oQISSvqn1j5lGVw&usqp=CAU"
              alt=""
              className="h-10 w-20"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2I75rxUUGe78wcrBLRtUg5NAoqSCJf88-Tg&usqp=CAU"
              alt=""
              className="h-10 w-20"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gP4e6d3FYtX8vMriPYJnJP2KCAS_AVJ6XA&usqp=CAU"
              alt=""
              className="h-10 w-20"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdI6WP_S57O1QzbDWcbuHECrFYOsVaODGnmg&usqp=CAU"
              alt=""
              className="h-10 w-20"
            />
          </div>
          <div className="border rounded-full items-center  pl-2 py-1">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <div className="w-[100%] pt-20 flex flex-row justify-between">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonJPblehWOwkVG-RpXBNLUJ9KLMWFT3u8CA&usqp=CAU"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col justify-center items-center text-[30px]  font-bold ">
              Explore Our Professional Business Solutions
            </div>
            <div className="grid grid-cols-12 gap-4 justify-center items-center  p-6">
              <div className="col-span-6">
                <div className="text-[16px] font-bold">Business Growth</div>
                <div className="text-[13px]">
                  Sed perspiciatis unde omnis natus error voluptatem
                </div>
              </div>
              <div className="col-span-6">
                <div className="text-[16px] font-bold">User Research</div>
                <div className="text-[13px]">
                  Sed perspiciatis unde omnis natus error voluptatem
                </div>
              </div>
              <div className="col-span-6">
                <div className="text-[16px] font-bold">Big Data Solution</div>
                <div className="text-[13px]">
                  Sed perspiciatis unde omnis natus error voluptatem
                </div>
              </div>
              <div className="col-span-6">
                <div className="text-[16px] font-bold">Product Design</div>
                <div className="text-[13px]">
                  Sed perspiciatis unde omnis natus error voluptatem
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 flex flex-row  justify-between">
          <div>
            <div className="w-[46%] text-[30px] font-bold">
              We’re Awards Winning Modern Business Solutions Agency
            </div>
            <div className="w-[46%] text-[13px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium totam rem aperiam eaque epsa
              quae ab illo inventore veritatis architecto beatae
            </div>
            <div className="grid grid-cols-12 w-[46%] gap-4">
              <div className="border p-2 col-span-4 gap-1 items-center justify-center">
                {/* <div className="border rounded-full px-1">
                {" "}
                <DoneIcon sx={{ fontSize: "small" }} />
              </div> */}

                <div className="text-[12px] gap-2">
                  <DoneIcon sx={{ fontSize: "small" }} />
                  Tech Solutions
                </div>
              </div>
              <div className="border p-2 col-span-4 gap-1 items-center">
                {/* <div className="border rounded-full px-1">
                {" "}
                <DoneIcon sx={{ fontSize: "small" }} />
              </div> */}
                <div className="text-[12px] ">
                  {" "}
                  <DoneIcon sx={{ fontSize: "small" }} />
                  IT Consulting
                </div>
              </div>
              <div className="border p-2 col-span-4 gap-1 items-center">
                {/* <div className="border rounded-full px-1">
                {" "}
                <DoneIcon sx={{ fontSize: "small" }} />
              </div> */}
                <div className="text-[12px]">
                  <DoneIcon sx={{ fontSize: "small" }} />
                  Web Solutions
                </div>
              </div>
              <div className="border p-2 col-span-4 gap-1 items-center">
                {/* <div className="border rounded-full px-1">
                {" "}
                <DoneIcon sx={{ fontSize: "small" }} />
              </div> */}
                <div className="text-[12px]">
                  <DoneIcon sx={{ fontSize: "small" }} />
                  Business Growth
                </div>
              </div>
              <div className="border p-2 col-span-4 gap-1 items-center">
                {/* <div className="border rounded-full px-1">
                {" "}
                <DoneIcon sx={{ fontSize: "small" }} />
              </div> */}
                <div className="text-[12px]">
                  <DoneIcon sx={{ fontSize: "small" }} />
                  Product Design
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PpOQdxKhV2abE3zcHWrLwHSsQf4w58Ik1Fw0vKMOJRfv0DB5aP5THUxk7L6w4qS2AsM&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className=" pt-20">
          <div className="flex flex-col justify-center items-center text-[30px] w-[100%] font-bold">
            Great Features To Do Your Buisness Growth & Development{" "}
          </div>
          <div className="pt-5 flex flex-row">
            <img
              src="https://freepngimg.com/save/78222-color-light-frame-effect-theme-circle/541x503"
              alt=""
              className="h-80 w-80"
            />
            <div className="flex flex-col gap-8 relative w-[100%]">
              <div className="border px-4 flex flex-row justify-between gap-4 absolute top-0 left-[-36px]">
                <div>
                  <div className="text-[17px] font-bold">Graphics Design</div>
                  <div className="text-[13px] ">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </div>
                </div>
                <div className="pt-2">
                  <ArrowCircleRightIcon />
                </div>
              </div>
              <div className="border px-4 flex flex-row justify-between gap-4 mt-16 w-[57%]">
                <div>
                  <div className="text-[17px] font-bold">
                    Ideation & Evaluation
                  </div>
                  <div className="text-[13px] ">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </div>
                </div>
                <div className="pt-2">
                  <ArrowCircleRightIcon />
                </div>
              </div>
              <div className="border px-4 flex flex-row justify-between gap-4 absolute left-4 top-32">
                <div>
                  <div className="text-[17px] font-bold">Brand Identity</div>
                  <div className="text-[13px] ">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </div>
                </div>
                <div className="pt-2">
                  <ArrowCircleRightIcon />
                </div>
              </div>
              <div className="border px-4 flex flex-row justify-between gap-4 absolute top-52 left-[-36px]">
                <div>
                  <div className="text-[17px] font-bold">Custome Service</div>
                  <div className="text-[13px] ">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </div>
                </div>
                <div className="pt-2">
                  <ArrowCircleRightIcon />
                </div>
              </div>
              <div className="border px-4 flex flex-row justify-between gap-4 absolute bottom-0 left-[-70px]">
                <div>
                  <div className="text-[17px] font-bold">Web Strategy</div>
                  <div className="text-[13px] ">
                    Sed perspiciatis unde omnis natus error voluptatem
                  </div>
                </div>
                <div className="pt-2">
                  <ArrowCircleRightIcon />
                </div>
              </div>
              {/* <div>Ideation & Evaluation</div>
              <div>Brand Identity</div>
              <div>Custome Service</div>
              <div>Web Strategy</div> */}
            </div>
          </div>
        </div>

        <div className="pt-20 flex flex-col justify-center items-center w-[100%]">
          <div className="flex flex-col justify-center items-center text-[30px] w-[40%] font-bold">
            Checkout our Recently Completed Projects
          </div>
          <div className="flex flex-row justify-start gap-4">
            <div className="py-10">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-120px w-50px"
              />
            </div>
            <div className="py-10">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-130px w-50px"
              />
            </div>
            <div className="py-10">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="h-110px w-50px"
              />
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-row justify-between">
          <div>
            <div className="text-[30px] w-[40%] font-bold">
              Manage Business SEO Optimization Easily
            </div>
            <div className="w-[35%] text-[13px]">
              Quis autem vel eum iure reprehenderit qui in ea voluptates velit
              esse quam molestiae consequatur velillum
            </div>
            <div className="w-[35%] text-[13px] font-bold flex flex-row justify-between border p-1 pt-2 mb-2">
              <div>Why SEO Growth Business Strategy ?</div>
              <ArrowForwardIcon />
            </div>
            <div className="w-[35%] text-[13px] font-bold flex flex-row justify-between border p-1 pt-2 mb-2">
              <div>How We Help Your Projects ?</div>
              <ArrowForwardIcon />
            </div>
            <div className="w-[35%] text-[13px] font-bold flex flex-row justify-between border p-1 pt-2 mb-2">
              <div>Why SEO Growth Business Strategy ?</div>
              <ArrowForwardIcon />
            </div>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style={{ height: "250px", width: "350px" }}
            />
          </div>
        </div>

        <div className="pt-20">
          <div className="text-[30px] w-[40%] font-bold">
            Let’s See Our Company Achievement
          </div>
          <div className="w-[35%] text-[13px]">
            Sed ut perspiciatis unde omnis iste natus error sit ways voluptatem
            accusantium doloremque laudantium totam rem aperiam eaque epsa quae
            abillo inventore
          </div>
          <div className="flex flex-col justify-center items-center pt-10">
            <div className="flex flex-row justify-start gap-4">
              <div
                className="h-[160px] w-[160px] border rounded-lg"
                style={{ rotate: "-8deg" }}
              >
                <div className="w-[100%] flex flex-row justify-center py-6">
                  <HandshakeIcon style={{ rotate: "8deg" }} />
                </div>
                <div
                  className="text-lg w-[100%] flex flex-row justify-center font-bold"
                  style={{ rotate: "8deg" }}
                >
                  150+
                </div>
                <div
                  className="text-sm w-[100%] flex flex-row justify-center"
                  style={{ rotate: "8deg" }}
                >
                  Project Completed
                </div>
              </div>
              <div
                className="h-[160px] w-[160px] border rounded-lg"
                style={{ rotate: "-8deg" }}
              >
                <div className="w-[100%] flex flex-row justify-center py-6">
                  <HailIcon style={{ rotate: "8deg" }} />
                </div>
                <div
                  className="text-lg w-[100%] flex flex-row justify-center font-bold"
                  style={{ rotate: "8deg" }}
                >
                  250+
                </div>
                <div
                  className="text-sm w-[100%] flex flex-row justify-center"
                  style={{ rotate: "8deg" }}
                >
                  Satisfied Clients
                </div>
              </div>
              <div
                className="h-[160px] w-[160px] border rounded-lg"
                style={{ rotate: "-8deg" }}
              >
                <div className="w-[100%] flex flex-row justify-center py-6">
                  <PeopleOutlineIcon style={{ rotate: "8deg" }} />
                </div>
                <div
                  className="text-lg w-[100%] flex flex-row justify-center font-bold"
                  style={{ rotate: "8deg" }}
                >
                  50+
                </div>
                <div
                  className="text-sm w-[100%] flex flex-row justify-center"
                  style={{ rotate: "8deg" }}
                >
                  Expert Teams
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 flex flex-col justify-center items-center w-[100%]">
          <div className="flex flex-col justify-center items-center text-[30px] w-[40%] font-bold">
            People’s Say About Our Support & Services
          </div>
          <div className="flex flex-row justify-center w-full gap-4 pt-10">
            <div className="bg-[#292738] border p-8 w-[30%]">
              <div className="text-[13px] border-b text-[#67687A] pb-4">
                Sed ut perspiciatis unde natus error sitwa voluptatem
                accusantium laudant totames aperiam eaque abillo beatae vitae
              </div>
              <div className="text-[20px] pt-2">Richard S. Brooks</div>
              <div className="text-[13px] text-[#67687A]">CEO & Founder</div>
            </div>
            <div className="bg-[#292738] border p-8 w-[30%]">
              <div className="text-[13px] border-b text-[#67687A] pb-4">
                Sed ut perspiciatis unde natus error sitwa voluptatem
                accusantium laudant totames aperiam eaque abillo beatae vitae
              </div>
              <div className="text-[20px] pt-2">Gars G. Bernhardt</div>
              <div className="text-[13px] text-[#67687A]">CEO & Founder</div>
            </div>
          </div>
        </div>

        <div className="pt-20  ">
          <div className="">
            <div className="text-[24px] font-bold w-[30%]">
              {" "}
              Ready to Work Together In News Projects ?
            </div>
            <div className="flex flex-col w-[30%] gap-4 pt-5">
              <TextField
                id="filled-textarea"
                label="Your Name*"
                placeholder="Name"
                variant="filled"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                id="filled-textarea"
                label="Your Email*"
                placeholder="Email"
                variant="filled"
                style={{ backgroundColor: "white" }}
              />
              <TextField
                id="filled-textarea"
                label="Your Message*"
                placeholder="Message"
                multiline
                rows={4}
                variant="filled"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="bg-[#186EF2] p-2 h-10 w-32 mt-4">
              <div>Send Message</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-20">
          <div className="flex flex-col justify-center gap-4 pb-24 w-[25%]">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="h-10 w-20"
            />
            <div>Follow</div>
            <div className="flex flex-row gap-2">
              <div>FB</div>
              <div>T</div>
              <div>LI</div>
              <div>IG</div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 w-[25%]">
            <div className="font-bold text-[20px]">Services</div>
            <div>Product Design</div>
            <div>Business Consulting</div>
            <div>Customer Services</div>
            <div>Brand Identity</div>
            <div>SEO Optimization</div>
          </div>
          <div className="flex flex-col justify-center gap-4 pb-16 w-[25%]">
            <div className="font-bold text-[20px]">Contact</div>
            <div>785 Main Street, 2nd Block melbourne, australia</div>
            <div>support@gmail.com</div>
            <div>+000 (123) 456 88</div>
          </div>
          <div className="flex flex-col justify-center gap-4 pb-28 w-[25%] ">
            <div className="font-bold text-[20px]">NewsLetter</div>
            <div>Get Every Single Update to Join Our Newsletter</div>
            <div className="flex flex-row justify-between gap-2 border-b">
              <div className="flex flex-row gap-2 ">
                <EmailIcon />
                <div className="text-sm">Email Address</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="text-sm">Sign Up</div>
                <KeyboardDoubleArrowRightIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between pt-20">
          <div>Copy@ 2023 Atsu. All Rights reserved</div>
          <div className="flex flex-row gap-2">
            <div>Setting & Privacy</div>
            <div>Faqs</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesignXdToCode;
